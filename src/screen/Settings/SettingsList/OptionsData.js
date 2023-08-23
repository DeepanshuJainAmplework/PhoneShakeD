const DATA=[
    {
        title:'PROFILE',
        data:[{label:"Name",screen:'Update', id:'Name'},
              {label:"Handle", id:'UserName'},
              {label:"Organisation",screen:'Update', id:'Organisation'},
              {label:"Position",screen:'Update', id:'Designation'},
              {label:"Bio",screen:'Update',id:'' },
            ],
    },
    {
        title:'LINKED ACCOUNTS',
        data:[{label:"Linked Accounts",screen:'LinkedAccounts', id:''},],
    },
    {
        title:'CONTACT INFORMATION',
        data:[{label:"Mobile Number",screen:'Update', id:'Mobile'},
              {label:"Email",screen:'Update', id:'Email'},
              {label:'Landline/Desk',screen:'Update', id:'Landline'},
              {label:'Fax',screen:'Update', id:'Fax'}, 
              {label:'Address',screen:'Address', id:'Address'}
            ],
    },
    {
        title:'ACCOUNT INFORMATION',
        data:[
              {label:'Signup Info',screen:'SignUpInfo', id:'SignUpInfo'},
              {label:'Privacy',screen:'Privacy', id:''},
              {label:'Notifications',screen:'Notifications', id:''}, 
              {label:'Blocked Contacts',screen:'BlockedContacts', id:''},
              {label:'Logout',screen:'LogOut',id:''}
            ],
    },
]

export {DATA};