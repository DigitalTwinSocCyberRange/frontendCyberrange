const Task2 =
 {
     title: "TaskTwo.",
     tileNo: "task2",
     apiPath: "attacker",
     subtitle: "Unknown Ip Address",
     taskDescription: 'Complete the following directives that aim to set off an alarm each time the <strong>Firewall</strong> produces a Log Event with a warning about an unknown IP address in the network.',
    


     directive: {
      "directives": [
          {
          "id": 1,
          "name": "Unkown IP in network",
          "priority": 3,
          "disabled": false,
          "all_rules_always_active": false,
          "kingdom": "Exploitation & Installation",
          "category": "Intrusion Detection",
          "rules": [
            {
              "name": "FIREWALL-WARNING",
              "stage": 1,
              "plugin_id": 1008,
              "plugin_sid": [
                9
              ],
              "occurrence": 1,
              "from": "ANY",
              "to": "ANY",
              "type": "PluginRule",
              "port_from": "ANY",
              "port_to": "ANY",
              "protocol": "ANY",
              "reliability": 10,
              "timeout": 0
            }
          ]
        }
      ]
    } ,
    
    blanks : [
      {
        name: "name",
        answer: "FIREWALL-WARNING",
        stage: 1,
        triesLeft: 3,
        placeholder: "title of the Event Type",
        wrongTry: false,
        rightTry: false,
        dataTooltip: "Use the search function of the SIEM dashboard to look for the Event Type",
      },
      {
        name: "plugin_sid",
        answer: "9",
        stage: 1,
        placeholder: "plugin_sid of the Event Type",
        triesLeft: 3,
        wrongTry: false,
        rightTry: false,
      },
    ] 

  }


  


export default Task2;