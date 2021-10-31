import React, { Component } from 'react'

export default class StateDemo extends Component {
    constructor(){
        super()
        this.state={names:['abrar','priyanka','sonal','neha']}
        this.state={presons:[{"id":1,"first_name":"Corey","last_name":"Ronnay","email":"cronnay0@booking.com","gender":"Female","ip_address":"20.105.238.198"},
        {"id":2,"first_name":"Rosamond","last_name":"Carrell","email":"rcarrell1@java.com","gender":"Non-binary","ip_address":"74.105.145.119"},
        {"id":3,"first_name":"Andris","last_name":"Cyples","email":"acyples2@scribd.com","gender":"Genderqueer","ip_address":"254.218.224.195"},
        {"id":4,"first_name":"Trumann","last_name":"Cornell","email":"tcornell3@newsvine.com","gender":"Female","ip_address":"155.190.251.65"},
        {"id":5,"first_name":"Angil","last_name":"Stains","email":"astains4@nba.com","gender":"Non-binary","ip_address":"43.251.203.204"},
        {"id":6,"first_name":"Talya","last_name":"Shannon","email":"tshannon5@typepad.com","gender":"Genderqueer","ip_address":"190.221.177.239"},
        {"id":7,"first_name":"Sondra","last_name":"Ridgedell","email":"sridgedell6@usgs.gov","gender":"Bigender","ip_address":"189.193.221.14"},
        {"id":8,"first_name":"Lynsey","last_name":"Fine","email":"lfine7@gravatar.com","gender":"Non-binary","ip_address":"236.109.76.254"},
        {"id":9,"first_name":"Emyle","last_name":"Duckerin","email":"educkerin8@gnu.org","gender":"Non-binary","ip_address":"38.202.31.223"},
        {"id":10,"first_name":"Bonni","last_name":"Matheson","email":"bmatheson9@dropbox.com","gender":"Genderqueer","ip_address":"197.127.122.224"},
        {"id":11,"first_name":"Petronia","last_name":"Cawdell","email":"pcawdella@japanpost.jp","gender":"Genderqueer","ip_address":"211.118.208.37"},
        {"id":12,"first_name":"Bev","last_name":"Knowlman","email":"bknowlmanb@cbslocal.com","gender":"Non-binary","ip_address":"239.59.187.223"},
        {"id":13,"first_name":"Judon","last_name":"Justun","email":"jjustunc@who.int","gender":"Female","ip_address":"36.107.87.76"},
        {"id":14,"first_name":"Mayor","last_name":"Christley","email":"mchristleyd@reference.com","gender":"Non-binary","ip_address":"135.214.9.186"},
        {"id":15,"first_name":"Cecilla","last_name":"Loffel","email":"cloffele@biblegateway.com","gender":"Agender","ip_address":"227.201.68.65"},
        {"id":16,"first_name":"Roanne","last_name":"Jeffels","email":"rjeffelsf@biblegateway.com","gender":"Female","ip_address":"191.27.19.106"},
        {"id":17,"first_name":"Bathsheba","last_name":"Kinleyside","email":"bkinleysideg@hugedomains.com","gender":"Genderfluid","ip_address":"103.54.213.104"},
        {"id":18,"first_name":"Ami","last_name":"Benois","email":"abenoish@mlb.com","gender":"Genderfluid","ip_address":"128.151.100.52"},
        {"id":19,"first_name":"Randell","last_name":"Luparto","email":"rlupartoi@engadget.com","gender":"Non-binary","ip_address":"74.53.78.88"},
        {"id":20,"first_name":"Emili","last_name":"Nemchinov","email":"enemchinovj@nydailynews.com","gender":"Polygender","ip_address":"210.61.59.102"},
        {"id":21,"first_name":"Clara","last_name":"Pietasch","email":"cpietaschk@unesco.org","gender":"Agender","ip_address":"121.168.251.65"},
        {"id":22,"first_name":"Lay","last_name":"Marchenko","email":"lmarchenkol@dropbox.com","gender":"Polygender","ip_address":"146.246.218.162"},
        {"id":23,"first_name":"Shell","last_name":"Trace","email":"stracem@bizjournals.com","gender":"Non-binary","ip_address":"200.144.5.190"},
        {"id":24,"first_name":"Salmon","last_name":"Limbourne","email":"slimbournen@independent.co.uk","gender":"Polygender","ip_address":"151.69.165.215"},
        {"id":25,"first_name":"Belinda","last_name":"Brooksbank","email":"bbrooksbanko@yahoo.co.jp","gender":"Female","ip_address":"80.13.16.88"},
        {"id":26,"first_name":"Vivia","last_name":"Ambrosini","email":"vambrosinip@dailymail.co.uk","gender":"Agender","ip_address":"203.15.127.164"},
        {"id":27,"first_name":"Candy","last_name":"Blasoni","email":"cblasoniq@examiner.com","gender":"Genderfluid","ip_address":"248.172.239.136"},
        {"id":28,"first_name":"Wylma","last_name":"Pryn","email":"wprynr@goo.gl","gender":"Male","ip_address":"139.110.140.107"},
        {"id":29,"first_name":"Catarina","last_name":"Shepstone","email":"cshepstones@imageshack.us","gender":"Non-binary","ip_address":"113.156.42.228"},
        {"id":30,"first_name":"Blinni","last_name":"Abbiss","email":"babbisst@fastcompany.com","gender":"Agender","ip_address":"212.103.162.198"},
        {"id":31,"first_name":"Allx","last_name":"Coverley","email":"acoverleyu@huffingtonpost.com","gender":"Genderfluid","ip_address":"227.51.57.34"},
        {"id":32,"first_name":"Inglis","last_name":"McKean","email":"imckeanv@noaa.gov","gender":"Genderqueer","ip_address":"242.107.99.52"},
        {"id":33,"first_name":"Duffie","last_name":"Bodicum","email":"dbodicumw@phpbb.com","gender":"Male","ip_address":"37.1.96.200"},
        {"id":34,"first_name":"Kamillah","last_name":"Coyett","email":"kcoyettx@is.gd","gender":"Polygender","ip_address":"69.21.180.128"},
        {"id":35,"first_name":"Querida","last_name":"Romney","email":"qromneyy@netlog.com","gender":"Non-binary","ip_address":"215.72.103.81"},
        {"id":36,"first_name":"Corina","last_name":"Deverill","email":"cdeverillz@telegraph.co.uk","gender":"Genderqueer","ip_address":"94.164.24.125"},
        {"id":37,"first_name":"Anstice","last_name":"Mc Pake","email":"amcpake10@cbc.ca","gender":"Polygender","ip_address":"196.168.130.52"},
        {"id":38,"first_name":"Myrwyn","last_name":"Somerlie","email":"msomerlie11@alibaba.com","gender":"Genderqueer","ip_address":"110.29.46.103"},
        {"id":39,"first_name":"Lacy","last_name":"Confait","email":"lconfait12@cnbc.com","gender":"Genderfluid","ip_address":"90.214.19.145"},
        {"id":40,"first_name":"Juana","last_name":"Nolleth","email":"jnolleth13@examiner.com","gender":"Genderfluid","ip_address":"185.223.133.86"},
        {"id":41,"first_name":"Agathe","last_name":"Casserley","email":"acasserley14@comsenz.com","gender":"Non-binary","ip_address":"207.133.12.154"},
        {"id":42,"first_name":"Ode","last_name":"Delepine","email":"odelepine15@phpbb.com","gender":"Male","ip_address":"77.179.224.119"},
        {"id":43,"first_name":"Fredra","last_name":"De Domenico","email":"fdedomenico16@eepurl.com","gender":"Polygender","ip_address":"209.208.212.116"},
        {"id":44,"first_name":"Aldon","last_name":"Clapperton","email":"aclapperton17@craigslist.org","gender":"Female","ip_address":"52.204.151.100"},
        {"id":45,"first_name":"Florenza","last_name":"Dooly","email":"fdooly18@statcounter.com","gender":"Male","ip_address":"206.224.24.8"},
        {"id":46,"first_name":"Hernando","last_name":"Moggan","email":"hmoggan19@craigslist.org","gender":"Female","ip_address":"131.30.45.246"},
        {"id":47,"first_name":"Brennen","last_name":"Hugo","email":"bhugo1a@google.co.jp","gender":"Male","ip_address":"243.113.92.39"},
        {"id":48,"first_name":"Kalvin","last_name":"Caddell","email":"kcaddell1b@techcrunch.com","gender":"Male","ip_address":"161.90.194.250"},
        {"id":49,"first_name":"Jaquenetta","last_name":"Evitt","email":"jevitt1c@cnn.com","gender":"Genderqueer","ip_address":"100.74.117.242"},
        {"id":50,"first_name":"Whitman","last_name":"Birtwhistle","email":"wbirtwhistle1d@hibu.com","gender":"Genderqueer","ip_address":"4.188.40.216"}]}
     
    }
    changeName(_name){
 
        console.log("name",_name)
        this.setState({name:_name})
    }
    changeAddress(_address){
 
        console.log("name",_address)
        this.setState({address:_address})
    }
    render() {
        return (
            <div>
              {
                //   this.state.names.map(n=>{
                //      <h2>{n}</h2> 
                //   })
                 this.state.names.map((name)=>{
                    <h1> name</h1>
                 })
              }
            </div>
        )
    }
}
