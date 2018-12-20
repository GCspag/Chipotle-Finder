let c1 = {
    lat: 40.794964, 
    long:-73.965863, 
    add: "805 COLUMBUS AVE NEW YORK, NY 10025"
}

let c2 = {
    lat:40.710576,
    long: -74.016400,
    add: "325 S END AVE, NEW YORK, NY 10280"
}

let c3 = {
    lat: 40.718723,
    long: -74.002084,
    add: "404 BROADWAY,  NEW YORK, NY 10013"
}

let c4 = {
    lat: 42.652497,
    long: -73.748740,
    add: "625 BROADWAY, NEW YORK, NY 10012"
}

let c5 = {
    lat: 40.744243,
    long: -73.987851,
    add: "234 5TH AVE FRNT 1, NEW YORK, NY 10001"
}

let store = [c1, c2, c3, c4, c5]


  
let longInput = document.querySelector("#longInput")
let latInput = document.querySelector("#latInput")



longInput.addEventListener("change" , (event) => {
    DistanceFind()
})

latInput.addEventListener("change" , (event) => {
    DistanceFind()
})


function DistanceFind() {
    store.forEach(c => {
        let longVal = (longInput.value)
        let latVal = (latInput.value)
        let x = (latVal - c.lat) ** 2
        let y = (longVal - c.long) ** 2
        let LongLat = x + y
        let division = Math.sqrt(LongLat) 
        c['dist'] = division
        printResult(division)
        store.sort(function(a, b){return a-b})
    })
}



function printResult(division) {
    document.getElementById('button').onclick = function() {
            var bestStore = store[0]
            store.forEach(c => {
                if(c.dist < bestStore.dist) {
                    bestStore = c
                }
            document.getElementById("result").innerHTML = "the closest chipotle is on " + bestStore.add
            })
        }
}