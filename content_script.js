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

function getDateFromURL() {
    var search = window.location.search;
    if (search.includes("date=")) {
        var date = new Date(search.split("date=")[1].split("&")[0]);
        return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    }
    return new Date();
}

function getWeekFromURL() {
    var search = window.location.search;
    if (search.includes("week=")) {
        return search.split("week=")[1].split("&")[0] - 1;
    }
    return -1;
}

function getCurrentWeek() {
    if (getWeekFromURL() != -1) {
        return getWeekFromURL();
    }
    var currentDate = getDateFromURL();
    var startDate = new Date("10/16/2017");
    var day = 1000 * 60 * 60 * 24;
    return Math.floor((currentDate - startDate) / day / 7);
};

function getLiveScoring() {
    if (document.getElementsByClassName("ysf-player-name Nowrap Grid-u Relative Lh-xs Ta-start").length == 0) {
        return true;
    }
    return false;
}

function getPlayers(liveScoring) {
    if (liveScoring) {
        return document.getElementsByClassName("D(ib) Pstart(5px) Fz(11px)");        
    }
    return document.getElementsByClassName("ysf-player-name Nowrap Grid-u Relative Lh-xs Ta-start");
}

function getTimer() {
    return 750;
}

function getTeamPosition(liveScoring, player) {
    if (liveScoring) {
        return player.innerText;
    } else {
        return player.getElementsByClassName("Fz-xxs")[0].innerHTML;
    }
}

function addHeader(liveScoring, week) {    
    var header = document.getElementsByClassName("First Last");
    if (document.getElementsByClassName("Alt Last").length > 0) {
        header = document.getElementsByClassName("Alt Last");
    }   
    var elements; 
    if (liveScoring) {
        header = document.getElementsByClassName("Bdbw(1px) Bdb(table-border) Bdbs(s) Ta(c) Bgc(table-hdr-bg) H(25px) Fz(11px) C(gray1)");        
        elements = header[0].getElementsByClassName("Ta(start)");
    } else {
        elements = header[0].getElementsByClassName("Ta-start");
    }
        
    for (var i in elements) {        
        if (typeof elements[i] === 'object' && elements[i].innerText.includes("Player")) {
            var span = document.createElement("span");
            span.style.color = 'firebrick';
            var node = document.createTextNode("\n(Showing games for week " + (week + 1) +")");
            span.appendChild(node);
            elements[i].appendChild(span);
        }        
    };
}

function getDash() {    
    var span = document.createElement("span");
    span.style.color = 'black';
    var node = document.createTextNode(" - ");
    span.appendChild(node);
    return span;
}

function getGamesLeftSpan(gamesLeft) {    
    var span = document.createElement("span");
    span.style.color = 'firebrick';
    var node = document.createTextNode("(" + gamesLeft + ")");
    span.appendChild(node);
    return span;
}

function main() {
    var liveScoring = getLiveScoring();
    var week = getCurrentWeek();
    if (week > 25 || week < 0) {
        console.log("No data for week " + (week + 1));
        return;
    }
    console.log("Showing games for week " + (week + 1));
    var players = getPlayers(liveScoring);
    for (var i in players) {
        var player = players[i];    
        if (typeof player === 'object' && !player.innerText.includes("Empty")) {
            var teamPosition = getTeamPosition(liveScoring, player);
            var team = teamPosition.split("-")[0];
            team = team.substring(0, team.length - 1);
            var gamesLeft = teamSchedule[teamMap[team]][week];            
            if (liveScoring) {
                player.appendChild(getDash());
                player.appendChild(getGamesLeftSpan(gamesLeft));
            } else {
                player.getElementsByClassName("Fz-xxs")[0].appendChild(getDash());
                player.getElementsByClassName("Fz-xxs")[0].appendChild(getGamesLeftSpan(gamesLeft));
            }        
        }
    }
    addHeader(liveScoring, week);

    var next = document.getElementsByClassName("last");
    for (var i = 0 ; i < next.length; i++) {
        if (next[i].innerText.includes("Next")) {
            next[i].addEventListener('click' , function(){ setTimeout(function() { main(); }, getTimer()); }, false); 
        }
    }

    var prev = document.getElementsByClassName("first");
    for (var i = 0 ; i < prev.length; i++) {
        if (prev[i].innerText.includes("Previous")) {
            prev[i].addEventListener('click' , function(){ setTimeout(function() { main(); }, getTimer()); }, false); 
        }
    }
}

console.log("Thanks for using fbb extender!");
setTimeout(function() { main(); }, getTimer());