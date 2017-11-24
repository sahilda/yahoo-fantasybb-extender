function getCurrentWeek() {
    var currentDate = new Date();
    var startDate = new Date("10/16/2017");
    var day = 1000 * 60 * 60 * 24    
    return Math.floor((currentDate - startDate) / day / 7)
};

var teamMap = {
    "Atl":"Atlanta Hawks",
    "Bkn":"Brooklyn Nets",
    "Bos":"Boston Celtics",
    "Cha":"Charlotte Hornets",
    "Chi":"Chicago Bulls",
    "Cle":"Cleveland Cavaliers",
    "Dal":"Dallas Mavericks",
    "Den":"Denver Nuggets",
    "Det":"Detroit Pistons",
    "GS":"Golden State Warriors",
    "Hou":"Houston Rockets",
    "Ind":"Indiana Pacers",
    "LAC":"Los Angeles Clippers",
    "LAL":"Los Angeles Lakers",
    "Mem":"Memphis Grizzlies",
    "Mia":"Miami Heat",
    "Mil":"Milwaukee Bucks",
    "Min":"Minnesota Timberwolves",
    "NO":"New Orleans Pelicans",
    "NY":"New York Knicks",
    "OKC":"Oklahoma City Thunder",
    "Orl":"Orlando Magic",
    "Phi":"Philadelphia 76ers",
    "Pho":"Phoenix Suns",
    "Por":"Portland Trail Blazers",
    "SA":"San Antonio Spurs",
    "Sac":"Sacramento Kings",
    "Tor":"Toronto Raptors",
    "Uta":"Utah Jazz",
    "Was":"Washington Wizards"
};

// schedule shows games per week for each team, first week starting 10/16/2017
var teamSchedule = {
	"Atlanta Hawks": [3, 4, 3, 3, 3, 4, 2, 4, 3, 4, 3, 3, 3, 3, 4, 4, 4, 2, 1, 4, 3, 3, 4, 3, 4, 1],
	"Boston Celtics": [3, 3, 4, 4, 3, 4, 3, 4, 4, 4, 4, 3, 1, 3, 3, 4, 4, 1, 2, 3, 3, 3, 3, 3, 4, 2],
	"Brooklyn Nets": [3, 4, 2, 4, 3, 3, 3, 3, 4, 3, 4, 3, 4, 4, 3, 4, 3, 2, 1, 4, 3, 3, 4, 3, 3, 2],
	"Charlotte Hornets": [2, 4, 4, 2, 3, 4, 2, 4, 4, 4, 3, 2, 3, 3, 4, 4, 4, 1, 3, 4, 3, 3, 4, 4, 3, 1],
	"Chicago Bulls": [2, 3, 3, 3, 3, 4, 3, 4, 3, 4, 4, 4, 3, 3, 4, 2, 3, 2, 2, 3, 4, 3, 4, 4, 3, 2],
	"Cleveland Cavaliers": [3, 4, 3, 3, 3, 3, 4, 4, 4, 2, 3, 3, 3, 3, 3, 3, 4, 1, 3, 3, 4, 3, 4, 4, 3, 2],
	"Dallas Mavericks": [3, 4, 4, 3, 3, 3, 3, 4, 3, 4, 4, 3, 3, 2, 4, 3, 4, 1, 2, 4, 3, 3, 3, 4, 4, 1],
	"Denver Nuggets": [2, 4, 4, 3, 3, 3, 3, 4, 3, 4, 3, 3, 4, 3, 3, 4, 3, 2, 2, 3, 4, 3, 3, 4, 3, 2],
	"Detroit Pistons": [3, 4, 3, 3, 3, 2, 4, 4, 4, 2, 3, 3, 3, 4, 3, 3, 4, 2, 2, 4, 3, 3, 4, 4, 3, 2],
	"Golden State Warriors": [3, 4, 3, 3, 4, 3, 4, 3, 2, 4, 4, 3, 4, 3, 3, 3, 3, 2, 2, 3, 4, 3, 3, 4, 4, 1],
	"Houston Rockets": [3, 4, 4, 3, 3, 2, 3, 2, 4, 3, 4, 3, 3, 3, 4, 3, 4, 2, 2, 3, 4, 4, 4, 3, 3, 2],
	"Indiana Pacers": [3, 3, 4, 4, 3, 3, 3, 4, 3, 3, 4, 2, 4, 4, 3, 4, 4, 1, 1, 4, 4, 3, 3, 3, 4, 1],
	"Los Angeles Clippers": [2, 3, 4, 3, 3, 3, 4, 2, 4, 4, 3, 3, 4, 3, 4, 2, 3, 2, 2, 4, 3, 4, 4, 4, 3, 2],
	"Los Angeles Lakers": [3, 3, 4, 3, 4, 2, 4, 2, 2, 4, 4, 4, 3, 4, 3, 3, 3, 2, 2, 3, 4, 3, 3, 4, 4, 2],
	"Memphis Grizzlies": [2, 4, 4, 2, 3, 4, 3, 4, 4, 3, 4, 2, 2, 4, 3, 4, 3, 1, 2, 4, 4, 3, 4, 4, 3, 2],
	"Miami Heat": [2, 3, 4, 4, 3, 3, 4, 2, 4, 4, 3, 3, 3, 4, 3, 4, 3, 2, 2, 3, 4, 3, 4, 3, 3, 2],
	"Milwaukee Bucks": [3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 4, 4, 3, 3, 4, 3, 2, 2, 4, 3, 3, 4, 4, 3, 2],
	"Minnesota Timberwolves": [3, 3, 4, 2, 4, 4, 4, 3, 3, 3, 4, 4, 4, 3, 4, 4, 3, 2, 2, 3, 2, 3, 3, 4, 2, 2],
	"New Orleans Pelicans": [3, 3, 4, 3, 3, 4, 3, 4, 3, 3, 3, 2, 4, 3, 4, 3, 4, 2, 2, 3, 4, 4, 3, 3, 3, 2],
	"New York Knicks": [2, 3, 4, 3, 3, 4, 3, 4, 3, 3, 4, 4, 3, 4, 3, 4, 3, 2, 2, 3, 3, 3, 4, 3, 3, 2],
	"Oklahoma City Thunder": [3, 3, 3, 4, 2, 4, 3, 3, 4, 4, 4, 3, 3, 3, 4, 4, 3, 2, 2, 4, 3, 4, 3, 3, 2, 2],
	"Orlando Magic": [3, 3, 4, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2, 3, 4, 2, 2, 4, 4, 3, 3, 3, 4, 2],
	"Philadelphia 76ers": [3, 3, 3, 3, 3, 3, 4, 4, 2, 4, 4, 2, 1, 3, 4, 4, 3, 2, 3, 4, 3, 3, 4, 4, 4, 2],
	"Phoenix Suns": [3, 3, 4, 4, 4, 3, 3, 4, 3, 4, 3, 4, 2, 2, 4, 4, 3, 2, 2, 4, 3, 3, 3, 4, 3, 1],
	"Portland Trail Blazers": [3, 3, 4, 2, 4, 4, 3, 2, 4, 4, 2, 4, 4, 3, 3, 4, 4, 1, 2, 3, 3, 4, 3, 4, 3, 2],
	"Sacramento Kings": [3, 3, 3, 3, 4, 3, 4, 3, 3, 3, 4, 2, 4, 3, 4, 3, 3, 2, 2, 5, 3, 4, 3, 4, 2, 2],
	"San Antonio Spurs": [2, 4, 4, 3, 3, 3, 4, 4, 3, 4, 3, 4, 3, 4, 4, 3, 2, 2, 2, 2, 3, 4, 4, 3, 3, 2],
	"Toronto Raptors": [2, 3, 4, 3, 4, 3, 2, 3, 4, 3, 3, 3, 4, 4, 3, 4, 3, 2, 1, 4, 4, 4, 4, 2, 4, 2],
	"Utah Jazz": [3, 3, 4, 3, 4, 3, 3, 4, 3, 4, 3, 3, 2, 4, 3, 3, 4, 2, 2, 3, 4, 3, 4, 3, 3, 2],
	"Washington Wizards": [2, 4, 3, 3, 4, 3, 3, 4, 4, 3, 4, 3, 3, 3, 3, 3, 4, 1, 3, 4, 3, 3, 3, 4, 3, 2]
};

var players = document.getElementsByClassName("ysf-player-name Nowrap Grid-u Relative Lh-xs Ta-start");
var week = getCurrentWeek();
for (var i in players) {
    var player = players[i];
    if (typeof player === 'object') {        
        var name = player.getElementsByClassName("Nowrap")[0].innerHTML;
        var team_position = player.getElementsByClassName("Fz-xxs")[0].innerHTML;
        var team = team_position.split("-")[0];
        team = team.substring(0, team.length - 1);
        console.log(teamMap[team])        
        var gamesLeft = teamSchedule[teamMap[team]][week]
        var span = document.createElement("span");
        span.style.color = 'firebrick';
        var node = document.createTextNode("(" + gamesLeft + ")");
        span.appendChild(node);
        player.getElementsByClassName("Fz-xxs")[0].innerHTML = team_position + " - "
        player.getElementsByClassName("Fz-xxs")[0].appendChild(span);
    }
}