

<template>
    <div class="is-task" :id="taskData.tileNo">




        <div class="is-directive">

            <text class="title is-json is-text-red" :class="{'has-text-grey': task_completed || completedBefore}">{{taskData.title}}</text>



            <text class="has-text-grey subtitle nice-subtitle ">
                {{taskData.subtitle}}
            </text>

            <div v-if="task_completed" class="is-primary-darker subtitle is-json ">Completed</div>


            <div class="mt-5" v-if="!task_completed && !completedBefore ">
                <text class="is-size-6 has-text-justified" v-html="this.taskData.taskDescription"></text>


            </div>

            <div v-else>
                <div v-if="task_completed" class="notification notification-green is-light success-message ">
                    <span class="is-primary-darker is-size-5 mb-5 "> You earned {{this.pointsOverall}} points. </span>
                </div>


                <div class="columns is-hcentered mt-5 ">

                    <img src="./../assets/rocket.svg" class="image is-hcentered rotate" style="width: 100px">


                    <div class="ml-4 is-hcentered ">
                        <span class="title is-title-smaller is-primary-darker is-json"> DirectiveDeployed.</span> <br> The alarm will be visible on the SIEM dashboard in a few seconds. You can now also view the directive in plain JSON. Try the button!




                        <div style="display: table !important width: 100% !important" class="mt-5">




                            <div class="buttons is-pulled-left " v-if="task_completed || completedBefore">
                                <button @click="proceed()" class="button is-rounded submit-button ">CONTINUE</button>
                            </div>
                            <div class="buttons has-addons is-pulled-right is-json" v-if="task_completed || completedBefore">
                                <button @click="viewJson=false, showTask=true" class="button  is-rounded is-light  " :class="{'is-red-br':!viewJson && showTask}"> Task </button>
                                <button @click="viewJson=true, showTask=true" class="button  is-rounded is-light  " :class="{'is-red-br':viewJson && showTask}"> Json </button>
                                <button @click="showTask=false" class="button  is-rounded is-light  " :class="{'is-red-br':!showTask}">Hide</button>
                            </div>




                        </div>

                    </div>



                </div>
            </div>


            <br>

            <div v-if="showTask ">




                <div v-if="!viewJson" :class="{'directive-completed': task_completed || completedBefore}">
                    <span class="has-text-black is-json is-size-7">
                        directives[{{ Object.keys(directive).length }}]:
                    </span>
                    <div class="directive-header">
                        <div v-for="(item, index) in json_header" :key="item">
                            <json-field :name="index" :value="item"></json-field>
                        </div>

                        <span class="has-text-black is-json is-size-7">
                            rules[{{ rules.length }}]:
                        </span>

                        <div class="is-rule " v-for="(rule, index) in rules" :key="rule" :class="{'is-rule-level-2': index==1, 'is-rule-level-3': index==2}">
                            <div v-for="(item, index_inner) in rule" :key="item"> 
                                <div v-if="checkBlank(index_inner, index) != null">
                                    <!-- check this -->
                                    <blank :blanks="blanks[checkBlank(index_inner, index)]" :index="checkBlank(index_inner, index)" :tileNo="taskData.tileNo" @blank-completed="completeTask" @buy-hint="this.$emit('submit-points', -1)" :completedBefore="completedBefore"> </blank>
                                </div>
                                <div v-else>
                                    <json-field :name="index_inner" :value="item"></json-field> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div v-else>
                    <vue-json-editor class="is-background-white"
                                     lang="en"
                                     :value="directive"
                                     :mode="'code'">
                    </vue-json-editor>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

    import Blank from "./Blank.vue";
    import JsonField from "./JsonField.vue";
    export default {
        name: "BlankTask",
        props: {
            taskData: {
                type: Object,
                required: true
            },
            order: {},
            tasksCompleted: {}
        },
        data() {


            return {
                directive: this.taskData.directive,

                json_header: Object.fromEntries(
                    Object.entries(this.taskData.directive.directives[0]).slice(0, 7)
                ),
                rules: this.taskData.directive.directives[0].rules,
                blanks: this.taskData.blanks,
                viewJson: false,
                blanks_completed: this.getBlanksCompleted(),
                task_completed: false,
                pointsOverall: 0,
                timestamp_before: null,
                timestamp_after: null,
                timeToComplete: null,
                showTask: true,

            };


        },



        components: {
            Blank,
            JsonField,
        },

        computed: {
            completedBefore() {
                if (this.taskData.level < this.tasksCompleted) {
                    return true;
                } else {
                    return false;
                }
            }

        },



        methods: {
            getBlanksCompleted() { //parsing localStorage to determine which blanks have been already completed in case of a refresh in the middle of a task

                if (localStorage.getItem("blanksCompleted") != null) {
                    return JSON.parse(localStorage.getItem("blanksCompleted"))[this.taskData.tileNo];
                }
                else {
                    return 0;
                }
            },


            completeTask(points) {


                if (this.timestamp_before == null) { //set start time of task with first submit, this gives not a fully accurate time span but an ok solution
                    this.timestamp_before = new Date()
                }
                if (points != 0) {
                    this.$emit('submit-points', points)
                }

                this.pointsOverall += points;
                this.blanks_completed += 1;
                try {
                    var allBlanks = JSON.parse(localStorage.getItem("blanksCompleted"));
                    allBlanks[this.taskData.tileNo] = allBlanks[this.taskData.tileNo] + 1;
                    localStorage.setItem("blanksCompleted", JSON.stringify(allBlanks));
                }
                catch (err) {
                    console.log("localStorage empty")
                }


                if (this.blanks_completed == Object.keys(this.blanks).length) {
                    this.$http.get(window.location.href.replace("7080", "9090") + this.taskData.apiPath).then((response) => {
                        console.log(response.data)
                    }) //call api function that triggers the activation of the respective correlation directive in the backend

                   
                    this.task_completed = true;

                    this.timestamp_after = new Date()
                    this.timeToComplete = (this.timestamp_after.getTime() - this.timestamp_before.getTime()) / 1000

                    this.$emit('task-completed', [this.timestamp_before, this.timestamp_after, this.timeToComplete]);
                    this.scrollToElement(this.taskData.tileNo);


                }

            },
            checkBlank(index_inner, stage) { //comment TODO
                for (var i = 0; i < Object.keys(this.blanks).length; i++) {

                    if (index_inner == this.blanks[i].name && (stage + 1 == this.blanks[i].stage)) {

                        return i;
                    }
                }
                return null;

            },

            scrollToElement(id) {

                const el = document.getElementById(id);

                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', alignToTop: true });
                });

            },

            proceed() { //just for the looks: smooth scrolling to the next tile

                this.showTask = false;
                var nextSection = this.order.indexOf(this.taskData.tileNo) + 1
                this.scrollToElement(this.order[nextSection]);

            },

            format_time(s) {
                const dtFormat = new Intl.DateTimeFormat('de-DE', {
                    //timeStyle: 'medium',
                    //timeZone: 'GMT'
                });

                return dtFormat.format(new Date(s * 1e3));
            }

        }

    };
</script>