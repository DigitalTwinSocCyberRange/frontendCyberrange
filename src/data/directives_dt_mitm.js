

const Task3 =
{
    title: "3.3 Task:Man-In-The-Middle-Attack",
    tileNo: "task3",
    apiPath: "mitm",
    subtitle: "",
    taskDescription: "The directive aims to detect a Man-in-the-Middle-Attack. After detecting one occurrence of the Event Type <strong>“Liquid level (SENSOR 3) is not received. Program is unable to proceed properly”</strong> is detected (in Stage 1), the directive shall check if there are two more occurrences within in the next minute (Stage 2). If this is followed by one occurrence of the Event Type <strong>“Internal ENIP tag (SENSOR 3) updated”</strong> (in Stage 3) within in the next minute the alarm is set off.",
    level: 2,

    directive: {

        directives: [

            {
                "id": 2,
                "name": "MITM Attack",
                "priority": 3,
                "disabled": false,
                "all_rules_always_active": false,
                "kingdom": "Attacks",
                "category": "Spoofing",
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
                        "timeout": 0
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
            triesLeft: 3,
            placeholder: "rule stage",
            wrongTry: false,
            rightTry: false,
        },
        {
            name: "occurrence",
            answer: "1",
            stage: 1,
            triesLeft: 3,
            placeholder: "occurrence of event type",
            wrongTry: false,
            rightTry: false,
            dataTooltip: "Read about what's up with occurrence and timeout in Stage 1 in 3.2"
        },
        {
            name: "timeout",
            answer: "0",
            stage: 1,
            triesLeft: 3,
            placeholder: "timeout",
            wrongTry: false,
            rightTry: false,
        },
        {
            name: "stage",
            answer: "2",
            stage: 2,
            triesLeft: 3,
            placeholder: "rule stage",
            wrongTry: false,
            rightTry: false,
        },
        {
            name: "occurrence",
            answer: "2",
            stage: 2,
            triesLeft: 3,
            placeholder: "occurrence of event type",
            wrongTry: false,
            rightTry: false,
        },
        {
            name: "timeout",
            answer: "60",
            stage: 2,
            triesLeft: 3,
            placeholder: "timeout",
            wrongTry: false,
            rightTry: false,
        },
        {
            name: "stage",
            answer: "3",
            stage: 3,
            triesLeft: 3,
            placeholder: "rule stage",
            wrongTry: false,
            rightTry: false,
        },
        {
            name: "occurrence",
            answer: "1",
            stage: 3,
            triesLeft: 3,
            placeholder: "occurrence of event type",
            wrongTry: false,
            rightTry: false,
        },
        {
            name: "timeout",
            answer: "60",
            stage: 3,
            triesLeft: 3,
            placeholder: "timeout",
            wrongTry: false,
            rightTry: false,
        },

    ]

}





export default Task3;