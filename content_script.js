// schedule shows games per week for each team, first week starting 10/21/2019
var teamMap = {
    "Atl":"ATL",
    "Bkn":"BKN",
    "Bos":"BOS",
    "Cha":"CHA",
    "Chi":"CHI",
    "Cle":"CLE",
    "Dal":"DAL",
    "Den":"DEN",
    "Det":"DET",
    "GS":"GSW",
    "Hou":"HOU",
    "Ind":"IND",
    "LAC":"LAC",
    "LAL":"LAL",
    "Mem":"MEM",
    "Mia":"MIA",
    "Mil":"MIL",
    "Min":"MIN",
    "NO":"NOR",
    "NY":"NYK",
    "OKC":"OKC",
    "Orl":"ORL",
    "Phi":"PHI",
    "Pho":"PHO",
    "Por":"POR",
    "SA":"SAC",
    "Sac":"SAS",
    "Tor":"TOR",
    "Uta":"UTA",
    "Was":"WAS",
};

var teamSchedule = {
    "ATL":[2,4,3,4,4,3,4,3,4,4,2,1,4,3,4,4,4,3,3,4,4,1],
    "BKN":[3,4,4,3,4,4,3,3,4,3,2,2,4,4,3,4,4,3,3,4,3,1],
    "BOS":[3,4,4,4,3,3,4,3,4,4,2,2,4,4,4,3,3,4,3,4,3,0],
    "CHA":[3,3,4,4,3,4,4,4,3,4,2,1,4,4,4,3,4,4,4,3,2,1],
    "CHI":[3,4,4,3,3,3,4,3,4,4,2,1,5,4,3,3,3,4,4,3,4,1],
    "CLE":[3,3,4,4,4,4,4,4,3,3,2,1,4,4,4,4,4,4,4,2,3,0],
    "DAL":[3,3,3,4,4,4,4,4,2,4,2,2,3,3,4,4,4,4,4,3,3,1],
    "DEN":[2,4,4,3,3,4,3,4,4,3,3,2,3,3,4,3,4,3,4,4,3,2],
    "DET":[2,4,4,3,4,4,4,3,4,4,1,1,4,4,3,4,4,4,3,4,3,1],
    "GSW":[3,3,4,3,4,4,3,4,4,4,1,2,3,4,4,3,4,3,4,4,3,1],
    "HOU":[2,3,4,3,4,3,4,4,4,4,2,1,3,4,3,4,3,4,4,4,4,1],
    "IND":[3,3,3,5,3,4,4,3,3,4,3,1,4,3,4,4,4,4,3,3,3,1],
    "LAC":[3,4,4,3,3,4,4,3,4,4,2,2,4,4,3,3,4,4,3,3,4,0],
    "LAL":[3,4,4,3,3,4,3,4,3,4,2,2,4,4,4,2,4,3,4,3,4,1],
    "MEM":[2,4,3,4,4,3,4,4,3,4,2,1,4,4,2,4,3,4,4,3,4,2],
    "MIA":[2,3,4,3,4,4,4,3,4,4,2,2,3,2,4,4,4,4,3,4,4,1],
    "MIL":[3,3,4,3,4,3,4,4,4,3,2,2,4,3,4,3,3,4,4,4,3,1],
    "MIN":[3,3,4,2,4,4,4,4,4,4,1,1,4,3,3,3,4,4,4,4,3,2],
    "NOR":[3,3,3,4,3,4,4,3,4,3,3,2,3,4,3,3,4,4,4,3,3,2],
    "NYK":[3,3,4,4,4,3,4,3,4,4,1,1,4,4,4,4,2,3,4,3,4,2],
    "OKC":[2,4,4,4,3,3,4,4,3,4,2,1,4,4,4,3,4,3,4,3,4,1],
    "ORL":[3,3,4,4,4,4,3,4,3,3,2,1,4,4,4,4,4,3,4,3,3,1],
    "PHI":[3,3,4,5,3,4,3,3,4,3,2,1,4,4,4,4,4,3,3,4,3,1],
    "PHO":[3,4,3,4,4,3,4,4,3,4,1,1,5,3,4,4,3,4,3,4,3,1],
    "POR":[2,4,3,4,4,3,4,4,3,3,3,1,4,3,4,4,3,3,5,3,4,1],
    "SAC":[3,3,4,4,3,4,4,3,4,4,2,1,4,4,4,3,4,3,4,3,4,0],
    "SAS":[3,3,4,3,4,4,3,4,3,3,3,1,4,3,4,4,4,3,4,3,3,2],
    "TOR":[2,3,4,3,4,4,3,4,4,4,2,1,3,4,3,4,4,3,4,4,4,1],
    "UTA":[2,4,4,4,3,4,4,3,3,4,2,1,4,4,4,3,3,4,3,4,3,2],
    "WAS":[3,4,3,4,4,4,2,3,3,5,2,1,5,3,4,4,4,3,3,2,4,2]
}

function isAddPlayerPage() {
    var pathname = window.location.pathname;
    if (pathname.includes("players")) {
        return true;
    }
    return false;
}

function isMatchupPage() {
    var pathname = window.location.pathname;
    if (pathname.includes("matchup")) {
        return true;
    }
    return false;
}

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
        var week = search.split("week=")[1].split("&")[0];
        return week;
    }
    return -1;
}

function getCurrentWeek() {
    if (getWeekFromURL() != -1) {
        return getWeekFromURL();
    }
    var currentDate = getDateFromURL();
    var startDate = new Date("12/21/2020");
    var day = 1000 * 60 * 60 * 24;
    var week = Math.floor((currentDate - startDate) / day / 7) + 1;
    if (isAddPlayerPage()) {
        return week + 1;
    };
    return week;
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
    var header;
    var elements;
    if (liveScoring) {
        header = document.getElementsByClassName("Bdbw(1px) Bdb(table-border) Bdbs(s) Ta(c) Bgc(table-hdr-bg) H(25px) Fz(11px) C(gray1)");
        for (var i in header) {
            try {
                elements = header[i].getElementsByClassName("Ta(start)");
                addHeaderNode(elements, week);
            } catch (err) {

            }
        }
    } else {
        header = document.getElementsByClassName("First Last");
        if (header.length > 0) {
            for (var i in header) {
                try {
                    elements = header[i].getElementsByClassName("Ta-start");
                    addHeaderNode(elements, week);
                } catch (err) {

                }
            }
        }
        header = document.getElementsByClassName("Alt Last");
        if (header.length > 0) {
            for (var i in header) {
                try {
                    elements = header[i].getElementsByClassName("Ta-start");
                    addHeaderNode(elements, week);
                } catch (err) {

                }
            }
        }
    }
}

function addHeaderNode(elements, week) {
    for (var i in elements) {
        if (typeof elements[i] === 'object' && elements[i].innerText.includes("Player")) {
            var span = document.createElement("span");
            span.style.color = 'firebrick';
            var text = ("\n(Showing games for week " + week +")");
            if (isAddPlayerPage()) {
                text = ("\n(Showing games for next week - week " + week +")");
            };
            var node = document.createTextNode(text);
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
    var node = document.createTextNode("(" + gamesLeft + ") ");
    span.appendChild(node);
    return span;
}

function main() {
    var liveScoring = getLiveScoring();
    var week = getCurrentWeek();
    if (week > 22 || week < 0) {
        console.log("No data for week " + week);
        return;
    }
    if (week === 0) {
        week = 1;
    }
    console.log("Showing games for week " + week);
    var players = getPlayers(liveScoring);

    for (var i in players) {
        var player = players[i];
        if (typeof player === 'object' && !player.innerText.includes("Empty")) {
            var teamPosition = getTeamPosition(liveScoring, player);
            var team = teamPosition.split("-")[0];
            team = team.substring(0, team.length - 1);
            var gamesLeft = teamSchedule[teamMap[team]][week - 1];
            if (liveScoring) {
                player.appendChild(getDash());
                player.appendChild(getGamesLeftSpan(gamesLeft));
            } else {
                player.prepend(getGamesLeftSpan(gamesLeft));
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

console.log("Thanks for using fbb extender! Updated for the 2019-2020 season.");
setTimeout(function() { main(); }, getTimer());
