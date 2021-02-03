
  const Task6 =
  {
      title: "TaskSix.",
      taskNo: "task6",
      apiPath: "dos",
      subtitle: "Directive \"DOS-Attack\" ",
      nextSection: null,
 
      directiveSimilar: {
        "directives": [
            {
            
            "id": 5,
            "name": "DOS-Attack",
            "priority": 3,
            "disabled": false,
            "all_rules_always_active": false,
            "kingdom": "Exploitation & Installation",
            "category": "Denial of Service",
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
      },
 
      directive: {
          "directives": [
              {
              
              "id": 5,
              "name": "DOS-Attack",
              "priority": 3,
              "disabled": false,
              "all_rules_always_active": false,
              "kingdom": "Exploitation & Installation",
              "category": "Denial of Service",
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
 