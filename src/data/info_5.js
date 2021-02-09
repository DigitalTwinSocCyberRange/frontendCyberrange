const Info4 =
 {

  tileNo:"info5",
  directive: {

  directives: [

    {
        "id": 17,
        "name": "Sucipicous ARP-Request",
        "priority": 3,
        "disabled": false,
        "all_rules_always_active": false,
        "kingdom": "Attacks",
        "category": "Spoofing",
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
                "reliability": 2,
                "timeout": 60
            }
            
        ]
    }
] },
      

    highlights:[ 
    
    {
        name: "to",
        stage: 1,
    },
    {
      name: "from",
      stage: 1,
  },
  {
    name: "to",
    stage: 2,
},
{
  name: "from",
  stage: 2,
},


    
  ]
  }


  


export default Info4;