const Task5 =
 {
     title: "TaskFive.",
     tileNo: "task5",
     apiPath: "log_manipulation",
     subtitle: "Log File Manipulation.",

     directiveSimilar: {
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
        ] }] },

     directive: {
      "directives": [
        {
        "id": 4,
        "name": "Log File Manipulation",
        "priority": 3,
        "disabled": false,
        "all_rules_always_active": false,
        "kingdom": "Exploitation & Installation",
        "category": "Intrusion Detection",
        "rules": [
          {
            "name": "LOG FILE MANIPULATION",
            "stage": 1,
            "plugin_id": 1008,
            "plugin_sid": [
              8
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
    } 
  
  

     
  

 }
export default Task5;
