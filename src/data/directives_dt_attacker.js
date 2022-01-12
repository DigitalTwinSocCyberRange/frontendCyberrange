const Task2 =
 {
     title: "2.3 Task:Unknown Ip Address",
     tileNo: "task2",
     apiPath: "attacker",
     subtitle: "",
     taskDescription: 'Complete the following directives that aim to set off an alarm each time the <strong>Firewall</strong> which runs on the HMI produces a Log Event with a warning about an unknown IP address in the network.'
     +'<div class="columns is-hcentered mt-5 "> <img src="https://cdn.worldvectorlogo.com/logos/elastic-kibana.svg" class="image" style="width: 30px"> <span class="ml-1 is-hcentered "> Use the search bar of the SIEM dashboard to find the event type (name and plugin_sid) you need. </span> </div>'
     
     ,level: 1,
    


     directive: {
      "directives": [
          {
          "id": 1,
          "name": "Unkown IP in network",
          "priority": 3,
          "disabled": false,
          "all_rules_always_active": false,
          "kingdom": "Attacks",
          "category": "Malicious Insider",
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
        dataTooltip: "Use the search function of the SIEM dashboard to look for the Event Type. Maybe 'Firewall' helps ;)",
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