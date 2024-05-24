function imTired() {
    setTimeout(28800000);
    return 'Waky Waky!';
}

function howinfinitylookslike(stop = false, limit = 0) {
    let i = -1;
    while (stop === false || i < limit) {
        i++;
        console.log(i);
    }
}

// font: https://stackoverflow.com/questions/69756010/convert-string-to-braille
let map = " A1B'K2L@CIF/MSP\"E3H9O6R^DJG>NTQ,*5<-U8V.%[$+X!&;:4\\0Z7(_?W]#Y)=".split("").reduce((o, n, i) => {
return o[n] = "⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿"[i],
    o[n.toLowerCase()] = o[n], o;
}, {});

function toBraile(string) {
    return string.split("").map(c => map[c]).join("");
}

