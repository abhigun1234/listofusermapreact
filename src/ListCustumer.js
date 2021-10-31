import React, { Component } from 'react'

export default class ListCustumer extends Component {
    constructor(){
        super()
        this.state={custumerData:[{"id":1,"first_name":"Ernestus","last_name":"Allabush","email":"eallabush0@wordpress.com","gender":"Polygender"},
        {"id":2,"first_name":"Kelcey","last_name":"Pengelley","email":"kpengelley1@reddit.com","gender":"Non-binary"},
        {"id":3,"first_name":"Egan","last_name":"Buckel","email":"ebuckel2@cornell.edu","gender":"Polygender"},
        {"id":4,"first_name":"Lexi","last_name":"Folger","email":"lfolger3@theatlantic.com","gender":"Agender"},
        {"id":5,"first_name":"Jerad","last_name":"Wetherill","email":"jwetherill4@reference.com","gender":"Bigender"},
        {"id":6,"first_name":"Lilli","last_name":"Stockdale","email":"lstockdale5@over-blog.com","gender":"Genderfluid"},
        {"id":7,"first_name":"Antonella","last_name":"Purkess","email":"apurkess6@photobucket.com","gender":"Bigender"},
        {"id":8,"first_name":"Bren","last_name":"de Guise","email":"bdeguise7@prweb.com","gender":"Non-binary"},
        {"id":9,"first_name":"Joyous","last_name":"Maleney","email":"jmaleney8@huffingtonpost.com","gender":"Bigender"},
        {"id":10,"first_name":"Cchaddie","last_name":"De Malchar","email":"cdemalchar9@jimdo.com","gender":"Polygender"},
        {"id":11,"first_name":"Ewan","last_name":"Crake","email":"ecrakea@histats.com","gender":"Bigender"},
        {"id":12,"first_name":"Lydon","last_name":"Cumes","email":"lcumesb@wix.com","gender":"Male"},
        {"id":13,"first_name":"Billie","last_name":"McQuirk","email":"bmcquirkc@dot.gov","gender":"Genderqueer"},
        {"id":14,"first_name":"Keely","last_name":"Cornill","email":"kcornilld@blog.com","gender":"Agender"},
        {"id":15,"first_name":"Wyatan","last_name":"Prescot","email":"wprescote@biglobe.ne.jp","gender":"Genderqueer"},
        {"id":16,"first_name":"Pearla","last_name":"O'Kuddyhy","email":"pokuddyhyf@ftc.gov","gender":"Bigender"},
        {"id":17,"first_name":"Ertha","last_name":"Kemwall","email":"ekemwallg@timesonline.co.uk","gender":"Female"},
        {"id":18,"first_name":"Esmaria","last_name":"Mucillo","email":"emucilloh@washingtonpost.com","gender":"Agender"},
        {"id":19,"first_name":"Keslie","last_name":"Velten","email":"kvelteni@arizona.edu","gender":"Male"},
        {"id":20,"first_name":"Aurilia","last_name":"Bonsall","email":"abonsallj@ask.com","gender":"Non-binary"},
        {"id":21,"first_name":"Gardiner","last_name":"Flea","email":"gfleak@wiley.com","gender":"Polygender"},
        {"id":22,"first_name":"Carole","last_name":"Daville","email":"cdavillel@wsj.com","gender":"Agender"},
        {"id":23,"first_name":"Hilary","last_name":"Fitt","email":"hfittm@liveinternet.ru","gender":"Genderqueer"},
        {"id":24,"first_name":"Jone","last_name":"Denyakin","email":"jdenyakinn@illinois.edu","gender":"Agender"},
        {"id":25,"first_name":"Mella","last_name":"Slyman","email":"mslymano@pcworld.com","gender":"Non-binary"},
        {"id":26,"first_name":"Wat","last_name":"Alvar","email":"walvarp@xrea.com","gender":"Genderqueer"},
        {"id":27,"first_name":"Zahara","last_name":"Clarycott","email":"zclarycottq@telegraph.co.uk","gender":"Female"},
        {"id":28,"first_name":"Pieter","last_name":"Maingot","email":"pmaingotr@goo.gl","gender":"Genderfluid"},
        {"id":29,"first_name":"Raeann","last_name":"De La Coste","email":"rdelacostes@geocities.com","gender":"Genderqueer"},
        {"id":30,"first_name":"Robert","last_name":"Jonson","email":"rjonsont@economist.com","gender":"Agender"},
        {"id":31,"first_name":"Lydia","last_name":"Jonah","email":"ljonahu@boston.com","gender":"Bigender"},
        {"id":32,"first_name":"Gawen","last_name":"Holby","email":"gholbyv@intel.com","gender":"Non-binary"},
        {"id":33,"first_name":"Christabella","last_name":"Stiddard","email":"cstiddardw@senate.gov","gender":"Bigender"},
        {"id":34,"first_name":"Mal","last_name":"Deschlein","email":"mdeschleinx@aboutads.info","gender":"Genderfluid"},
        {"id":35,"first_name":"Kimberlee","last_name":"Hoggan","email":"khoggany@woothemes.com","gender":"Non-binary"},
        {"id":36,"first_name":"Roxane","last_name":"Lawless","email":"rlawlessz@indiegogo.com","gender":"Agender"},
        {"id":37,"first_name":"Carleton","last_name":"Hughf","email":"chughf10@bloglovin.com","gender":"Agender"},
        {"id":38,"first_name":"Marlene","last_name":"Garz","email":"mgarz11@aboutads.info","gender":"Agender"},
        {"id":39,"first_name":"Evvy","last_name":"Akast","email":"eakast12@drupal.org","gender":"Genderqueer"},
        {"id":40,"first_name":"Gaylord","last_name":"Hagard","email":"ghagard13@issuu.com","gender":"Male"},
        {"id":41,"first_name":"Theodora","last_name":"Gellier","email":"tgellier14@ucla.edu","gender":"Genderfluid"},
        {"id":42,"first_name":"Matthew","last_name":"de Mendoza","email":"mdemendoza15@ustream.tv","gender":"Bigender"},
        {"id":43,"first_name":"Sayers","last_name":"Upcott","email":"supcott16@dagondesign.com","gender":"Genderfluid"},
        {"id":44,"first_name":"Arleta","last_name":"Hainning","email":"ahainning17@homestead.com","gender":"Genderqueer"},
        {"id":45,"first_name":"Kalila","last_name":"Scholtz","email":"kscholtz18@webs.com","gender":"Male"},
        {"id":46,"first_name":"Kip","last_name":"Claughton","email":"kclaughton19@simplemachines.org","gender":"Bigender"},
        {"id":47,"first_name":"Dannie","last_name":"Giacobilio","email":"dgiacobilio1a@cyberchimps.com","gender":"Female"},
        {"id":48,"first_name":"Winifred","last_name":"Gillani","email":"wgillani1b@meetup.com","gender":"Polygender"},
        {"id":49,"first_name":"Lucia","last_name":"Saker","email":"lsaker1c@cocolog-nifty.com","gender":"Genderfluid"},
        {"id":50,"first_name":"Alix","last_name":"Seegar","email":"aseegar1d@hexun.com","gender":"Non-binary"}]}
 
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thred>
                        <tr>
                            <th></th>
                            <th>Custumer Name</th>
                            <th>Phone</th>
                        </tr>
                    </thred>
                    <tbody>
                     {

                         this.state.custumerData.map((cust)=>{
                             return(<tr><td>{cust.id}</td>
                             <td>{cust.first_name}</td>
                             <td>{cust.email}</td>
                             <td>{cust.gender}</td>
                             </tr>)
                         })
                     }
                    </tbody>

                </table>
            </div>
        )
    }
}
