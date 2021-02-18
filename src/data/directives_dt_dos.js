
  const Task6 =
  {
      title: "x06.2 Task:DOS-Attack",
      tileNo: "task6",
      apiPath: "dos",
      subtitle: "",
      level: 5,
      dataTooltip:'Destination IP means "from"',
      taskDescription: 'Create a directive that sets off an alarm called <strong>ICMP-DOS-Attack</strong> with id <strong>5</strong> that warns whenever the network is harmed by a flood of ICMP-REQUESTs. '+
      'Whenever an ICMP-REQUEST is detected (in Stage 1), the rule in Stage 2 checks whether <strong>1000 more occurrences </strong> of ICMP-REQUEST in the next 60 seconds are sent to the <strong>same Destination IP</strong> as in Stage 1.'+
      ' Create a new directive by modifying the directive you have seen in DirectiveSyntaxFour',
 
      directiveSimilar: {
        directives: [

          {
              "id": 17,
              "name": "Sucipicous ARP-Request",
              "priority": 3,
              "disabled": false,
              "all_rules_always_active": false,
              "kingdom": "Attacks",
              "category": "Disruption",
              rules: [
                  {
                      "name": "ARP-REQUEST",
                      "stage": 1,
                      "plugin_id": 1008,
                      "plugin_sid": [
                          13
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
                      "name": "ARP-REQUEST",
                      "stage": 2,
                      "plugin_id": 1008,
                      "plugin_sid": [
                          13
                      ],
                      "occurrence": 3,
                      "from": ":1",
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
 
      directive: {
          "directives": [
              {
              
              "id": 5,
              "name": "ICMP-DOS-Attack",
              "priority": 3,
              "disabled": false,
              "all_rules_always_active": false,
              "kingdom": "Attacks",
              "category": "Disruption",
              "rules": [
                {
                  "name": "ICMP-REQUEST",
                  "stage": 1,
                  "plugin_id": 1008,
                  "plugin_sid": [
                    11
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
                  "name": "ICMP-REQUEST",
                  "stage": 2,
                  "plugin_id": 1008,
                  "plugin_sid": [
                    11
                  ],
                  "occurrence": 1000,
                  "from": "ANY",
                  "to": ":1",
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
        }
        
      
   
   
 
      
   
 
  }
 export default Task6;
 