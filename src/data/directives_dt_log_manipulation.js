const Task5 =
 {
     title: "x05.2 Task:Log File Manipulation",
     tileNo: "task5",
     apiPath: "log_manipulation",
     subtitle: "",
     level: 4,
     taskDescription: 'Another Firewall Component produces a SIEM Event whenever it detects that a <strong>log file was manipulated</strong>. Find the Event Type in the SIEM dashboard and create a directive that sets off an alarm with the name <strong class="is-json">Log File Manipulation</strong> and the id <strong class="is-json">4</strong>  every time this Event Type comes up. '+
     'In TaskTwo you have already seen a very <strong>similar directive </strong> which is now already displayed in the Editor. Create a new directive by modifying this directive. As this is a new alarm, you not only need to change the Event Type in the RuleSection but also name and id of the alarm in the Directive Header. ',
    dataTooltip:'Search "Manipulation" in the SIEM Dashboard',
     directiveSimilar: {
      "directives": [
        {
        "id": 1,
        "name": "Unkown IP in network",
        "priority": 3,
        "disabled": false,
        "all_rules_always_active": false,
        "kingdom": "Attacks",
        "category": "Integrity-Violation",
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
    ] },

     directive: {
      "directives": [
        {
        "id": 4,
        "name": "Log File Manipulation",
        "priority": 3,
        "disabled": false,
        "all_rules_always_active": false,
        "kingdom": "Attacks",
        "category": "Integrity-Violation",
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
