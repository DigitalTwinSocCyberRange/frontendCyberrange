const Task2 =
{
  title: "4.3 Task:ARP-Spoofing",
  tileNo: "task4",
  apiPath: "arp",
  subtitle: "",
  taskDescription: 
    'The following directive aims to detect ARP-Spoofing. Whenever an <strong>"ARP-REPLY"</strong> with any Source- or Destination-'+
      'IP is detected (in Stage 1), the rule condition in Stage 2 (four more occurrences "ARP-REPLY") is only fulfilled if they have the <strong>Source-IP, which was registered in Stage 1.</strong> '+
      'There is another Firewall in place that produces a SIEM Event with a <strong>Warning</strong>, whenever it suspects <strong>ARP-Spoofing</strong>. The Source-IP of this Event Type shows which IP address is acting possibly maliciously. Set off the alarm, whenever one occurrence of this Event Type '+
      ' with the <strong>Source-IP registered in Stage 1</strong> comes up in Stage 3. Complete the directive by assigning the right values for Source-IDs and finding the correct Event Type for Stage 3.'+
      '<div class="columns is-hcentered mt-5 "> <img src="https://cdn.worldvectorlogo.com/logos/elastic-kibana.svg" class="image" style="width: 30px"> <span class="ml-1 is-hcentered "> Use the search bar of the SIEM dashboard to find the event type (name and plugin_sid) you need. </span> </div>',
     
      level: 3,
  directive: {
    directives: [

      {
        "id": 6,
        "name": "Arp-Spoof Attack",
        "priority": 5,
        "disabled": false,
        "all_rules_always_active": false,
        "kingdom": "Attacks",
        "category": "Spoofing",
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
  },

  blanks: [
    {
      name: "from",
      answer: ":1",
      stage: 2,
      triesLeft: 3,
      placeholder: "from",
      wrongTry: false,
      rightTry: false,
      dataTooltip: "the same source ip as in Stage 1, read 4.1."
    },
    {
      name: "name",
      answer: "ARP-SPOOF-WARNING",
      stage: 3,
      placeholder: "name",
      triesLeft: 3,
      wrongTry: false,
      rightTry: false,
      dataTooltip: "the Event Type is a 'Warning'"
    },
    {
      name: "plugin_sid",
      answer: "10",
      stage: 3,
      placeholder: "plugin_sid",
      triesLeft: 3,
      wrongTry: false,
      rightTry: false,
    },
    {
      name: "occurrence",
      answer: "1",
      stage: 3,
      placeholder: "occurrence",
      triesLeft: 3,
      wrongTry: false,
      rightTry: false,
    },
    {
      name: "from",
      answer: ":1",
      stage: 3,
      placeholder: "from",
      triesLeft: 3,
      wrongTry: false,
      rightTry: false,
      dataTooltip: "again: the same source ip as in Stage 1."
    }
  ]

}





export default Task2;




