const Info4 =
 {
    tileNo:"info4",

     directive: {

        directives: [

            {
                "id": 16,
                "name": "Out of liquid",
                "priority": 3,
                "disabled": false,
                "all_rules_always_active": false,
                "kingdom": "System information",
                "category": "CPS function",
                rules: [
                    {
                        "name": "Liquid level of tank (SENSOR 1) under LowerBound",
                        "stage": 1,
                        "plugin_id": 1008,
                        "plugin_sid": [
                            7
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
                        "name": "Liquid level of tank (SENSOR 1) under LowerBound",
                        "stage": 2,
                        "plugin_id": 1008,
                        "plugin_sid": [
                            7
                        ],
                        "occurrence": 5,
                        "from": "ANY",
                        "to": "ANY",
                        "type": "PluginRule",
                        "port_from": "ANY",
                        "port_to": "ANY",
                        "protocol": "ANY",
                        "reliability": 2,
                        "timeout": 30
                    },
                    {
                        "name": "Flow level (SENSOR 2) under SENSOR2_THRESH",
                        "stage": 3,
                        "plugin_id": 1008,
                        "plugin_sid": [
                            3
                        ],
                        "occurrence": 1,
                        "from": "ANY",
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

    highlights:[ 
    
    {
        name: "stage",
        stage: 1,
    },
    {
      name: "timeout",
      stage: 1,
  },
  {
    name: "occurrence",
    stage: 1,
},
{
    name: "stage",
    stage: 2,
},
{
  name: "timeout",
  stage: 2,
},
{
name: "occurrence",
stage: 2,
},
{
    name: "stage",
    stage: 3,
},
{
  name: "timeout",
  stage: 3,
},
{
name: "occurrence",
stage: 3,
},
    
    
  ]
  }


  


export default Info4;