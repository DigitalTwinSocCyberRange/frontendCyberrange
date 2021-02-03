const Task2 =
 {
     title: "TaskTwo.",
     taskNo: "task2",
     apiPath: "attacker",
     subtitle: "Directive \"Unknown IP address detected\" ",
     nextSection: "task3",

     directive: {
      directives: [
        {
          id: 1,
          name: "ATTACKER",
          priority: 3,
          disabled: false,
          all_rules_always_active: false,
          kingdom: "Exploitation & Installation",
          category: "Intrusion Detection",
          rules: [
            {
              name: "FIREWALL-WARNING",
              stage: 1,
              plugin_id: 1008,
              plugin_sid: [9],
              occurrence: 1,
              from: "ANY",
              to: "ANY",
              type: "PluginRule",
              port_from: "ANY",
              port_to: "ANY",
              protocol: "ANY",
              reliability: 10,
              timeout: 0,
            },
          ],
        },
      ],
    } ,
    
    blanks : [
      {
        name: "name",
        answer: "FIREWALL-WARNING",
        stage: 1,
        guessesLeft: 3,
        placeholder: "name of event type",
        wrongGuess: false,
        rightGuess: false,
      },
      {
        name: "plugin_sid",
        answer: "11",
        stage: 1,
        placeholder: "id of event type",
        guessesLeft: 3,
        wrongGuess: false,
        rightGuess: false,
      },
    ] 

  }


  


export default Task2;