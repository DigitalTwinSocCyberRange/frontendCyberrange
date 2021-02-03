const Task2 =
 {
     title: "TaskFour.",
     taskNo: "task4",
     apiPath: "arp",
     subtitle: "Directive \"ARP-Spoof Attack\" ",
     nextSection: "task5",

     directive: {
      directives: [
         
         {
          "id": 6,
          "name": "Arp-Spoof Attack",
          "priority": 5,
          "disabled": false,
          "all_rules_always_active": false,
          "kingdom": "Exploitation & Installation",
          "category": "Arp-Spoof",
          rules: [
              {
              "name": "ARP-REPLY",
              "stage": 1,
              "plugin_id": 1008,
              "plugin_sid": [
                14
              ],
              "occurrence": 1,
              "from": "ANY",
              "to": "ANY",
              "type": "PluginRule",
              "port_from": "ANY",
              "port_to": "ANY",
              "protocol": "ANY",
              "reliability": 5,
              "timeout": 0
            },
              {
              "name": "ARP-REPLY",
              "stage": 2,
              "plugin_id": 1008,
              "plugin_sid": [
                14
              ],
              "occurrence": 4,
              "from": ":1",
              "to": "ANY",
              "type": "PluginRule",
              "port_from": "ANY",
              "port_to": "ANY",
              "protocol": "ANY",
              "reliability": 5,
              "timeout": 60
            },
            {
              "name": "ARP-SPOOF-WARNING",
              "stage": 3,
              "plugin_id": 1008,
              "plugin_sid": [
                10
              ],
              "occurrence": 1,
              "from": ":1",
              "to": "ANY",
              "type": "PluginRule",
              "port_from": "ANY",
              "port_to": "ANY",
              "protocol": "ANY",
              "reliability": 10,
              "timeout": 60
            }
          ]
        }
    
      ]
    } ,
    
    blanks : [
      {
        name: "from",
        answer: ":1",
        stage: 2,
        guessesLeft: 3,
        placeholder: "from",
        wrongGuess: false,
        rightGuess: false,
      },
      {
        name: "name",
        answer: "ARP-SPOOF-WARNING",
        stage: 3,
        placeholder: "plugin_sid",
        guessesLeft: 3,
        wrongGuess: false,
        rightGuess: false,
      },
      {
        name: "plugin_sid",
        answer: "10",
        stage: 3,
        placeholder: "plugin_sid",
        guessesLeft: 3,
        wrongGuess: false,
        rightGuess: false,
      },
      {
        name: "occurrence",
        answer: "1",
        stage: 3,
        placeholder: "occurrence",
        guessesLeft: 3,
        wrongGuess: false,
        rightGuess: false,
      },
      {
        name: "from",
        answer: ":1",
        stage: 3,
        placeholder: "occurrence",
        guessesLeft: 3,
        wrongGuess: false,
        rightGuess: false,
      }
    ] 

  }


  


export default Task2;


    

