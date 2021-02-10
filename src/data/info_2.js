const Info2 =
 {
     title: "SIEMdirectivesOne.",
     taskNo: "info1",
     subtitle: "Directive Syntax: name and plugin_sid",
     nextSection: "task3",

     directive: {
      directives: [
        {
          id: 15,
          name: "Sensor 3 disfunction",
          priority: 3,
          disabled: false,
          all_rules_always_active: false,
          kingdom: "Disfunctions",
          category: "Receiving problem",
          rules: [
            {
              name: "Liquid level (SENSOR 3) is not received. Program is unable to proceed properly",
              stage: 1,
              plugin_id: 1008,
              plugin_sid: [6],
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
    },

    highlights:[ 
    
    {
        name: "name",
        stage: 1,
    },
    {
      name: "plugin_sid",
      stage: 1,
  }
    
    
  ]
  }


  


export default Info2;