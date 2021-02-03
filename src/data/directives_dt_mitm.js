

const Task3 =
{
    title: "TaskThree.",
    taskNo: "task3",
    apiPath: "mitm",
    subtitle: "Directive \"MITM Attack\" ",
    nextSection: "task4",


    directive: {

        directives: [

            {
                "id": 2,
                "name": "MITM Attack",
                "priority": 3,
                "disabled": false,
                "all_rules_always_active": false,
                "kingdom": "Exploitation & Installation",
                "category": "Denial of Service",
                rules: [
                    {
                        "name": "Liquid level (SENSOR 3) is not received. Program is unable to proceed properly",
                        "stage": 1,
                        "plugin_id": 1008,
                        "plugin_sid": [
                            6
                        ],
                        "occurrence": 1,
                        "from": "ANY",
                        "to": "ANY",
                        "type": "PluginRule",
                        "port_from": "ANY",
                        "port_to": "ANY",
                        "protocol": "ANY",
                        "reliability": 2,
                        "timeout": 60
                    },

                    {
                        "name": "Liquid level (SENSOR 3) is not received. Program is unable to proceed properly",
                        "stage": 2,
                        "plugin_id": 1008,
                        "plugin_sid": [
                            6
                        ],
                        "occurrence": 2,
                        "from": "ANY",
                        "to": "ANY",
                        "type": "PluginRule",
                        "port_from": "ANY",
                        "port_to": "ANY",
                        "protocol": "ANY",
                        "reliability": 2,
                        "timeout": 60
                    },
                    {
                        "name": "Internal ENIP tag (SENSOR 3) updated",
                        "stage": 3,
                        "plugin_id": 1008,
                        "plugin_sid": [
                            2
                        ],
                        "occurrence": 1,
                        "from": "ANY",
                        "to": "ANY",
                        "type": "PluginRule",
                        "port_from": "ANY",
                        "port_to": "ANY",
                        "protocol": "ANY",
                        "reliability": 8,
                        "timeout": 60
                    }
                ]
            }
        ]


    },

    blanks: [
        {
            name: "stage",
            answer: "1",
            stage: 1,
            guessesLeft: 3,
            placeholder: "rule stage",
            wrongGuess: false,
            rightGuess: false,
        },
        {
            name: "occurrence",
            answer: "1",
            stage: 1,
            guessesLeft: 3,
            placeholder: "occurrence of event type",
            wrongGuess: false,
            rightGuess: false,
        },
        {
            name: "timeout",
            answer: "0",
            stage: 1,
            guessesLeft: 3,
            placeholder: "timeout",
            wrongGuess: false,
            rightGuess: false,
        },
        {
            name: "stage",
            answer: "2",
            stage: 2,
            guessesLeft: 3,
            placeholder: "rule stage",
            wrongGuess: false,
            rightGuess: false,
        },
        {
            name: "occurrence",
            answer: "2",
            stage: 2,
            guessesLeft: 3,
            placeholder: "occurrence of event type",
            wrongGuess: false,
            rightGuess: false,
        },
        {
            name: "timeout",
            answer: "60",
            stage: 2,
            guessesLeft: 3,
            placeholder: "timeout",
            wrongGuess: false,
            rightGuess: false,
        },
        {
            name: "stage",
            answer: "3",
            stage: 3,
            guessesLeft: 3,
            placeholder: "rule stage",
            wrongGuess: false,
            rightGuess: false,
        },
        {
            name: "occurrence",
            answer: "1",
            stage: 3,
            guessesLeft: 3,
            placeholder: "occurrence of event type",
            wrongGuess: false,
            rightGuess: false,
        },
        {
            name: "timeout",
            answer: "60",
            stage: 3,
            guessesLeft: 3,
            placeholder: "timeout",
            wrongGuess: false,
            rightGuess: false,
        },

    ]

}





export default Task3;