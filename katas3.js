const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let num = []
    for (let i = 1; i <= 25; i++) {
        num.push(i)
    }
    return num.join(", ")
}
console.log(kata1());

function kata2() {
    let num = []
    for (let i = 25; i >= 1; i--) {
        num.push(i)
    }
    return num.join(", ")
}
console.log(kata2());

function kata3() {
    let num = []
    for (let i = -1; i >= -25; i--) {
        num.push(i)
    }
    return num.join(", ")
}
console.log(kata3());

function kata4() {
    let num = []
    for (let i = -25; i <= -1; i++) {
        num.push(i)
    }
    return num.join(", ")
}
console.log(kata4());

function kata5() {
    let num = []
    for (let i = 25; i >= -25; i--) {
        if (i % 2 != 0) {
            num.push(i)
        }
    }
    return num.join(", ")
}
console.log(kata5());

function kata6() {
    let num = []
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            num.push(i)
        }
    }
    return num.join(", ")
}
console.log(kata6());

function kata7() {
    let num = []
    for (let i = 1; i <= 100; i++) {
        if (i % 7 == 0) {
            num.push(i)
        }
    }
    return num.join(", ")
}
console.log(kata7());

function kata8() {
    let num = []
    for (let i = 100; i >= 1; i--) {
        if (i % 3 == 0 || i % 7 == 0) {
            num.push(i)
        }
    }
    return num.join(", ")
}
console.log(kata8());

function kata9() {
    let num = []
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0 && i % 2 != 0) {
            num.push(i)
        }
    }
    return num.join(", ")
}
console.log(kata9());

function kata10() {
    return sampleArray.join(", ")
}
console.log(kata10());

function kata11() {
    let num = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 == 0) {
            num.push(sampleArray[i])
        }
    }
    return num.join(", ")
}
console.log(kata11());

function kata12() {
    let num = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 != 0) {
            num.push(sampleArray[i])
        }
    }
    return num.join(", ")
}
console.log(kata12())

function kata13() {
    let num = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 == 0) {
            num.push(sampleArray[i])
        }
    }
    return num.join(", ")
}
console.log(kata13());

function kata14() {
    let num = []
    for (let i = 0; i < sampleArray.length; i++) {
        num.push(Math.pow(sampleArray[i],2))
    }
    return num.join(", ")
}
console.log(kata14())

function kata15() {
    let num = 0
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] >= 1 && sampleArray[i] <= 20) {
            num += sampleArray[i]
        }
    }
    return num
}
console.log(kata15())

function kata16() {
    let num = 0
    for (let i = 0; i < sampleArray.length; i++) {
        num += sampleArray[i]
    }
    return num
}
console.log(kata16())

function kata17() {
    return Math.min.apply (null, sampleArray)
}
console.log(kata17())

function kata18() {
    return Math.max.apply (null, sampleArray)
}
console.log(kata18())