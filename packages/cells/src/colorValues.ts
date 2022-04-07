export let checkColorCodeInCell: (code: string) => any = function(
    code: string): string {
        let color: string = '';
        let words = code.replace('\n', ' ').split(' ');
        var dump_elem = document.body.appendChild(document.createElement('dump-random-fizz'));         
        for (var i = 0; i < words.length; i++){
            let word = words[i];
            if (word.indexOf('rgb') === -1)
            {
                // convert named colors
                var flag = 'rgb(1, 2, 3)'; 
                dump_elem.style.color = flag;
                if (dump_elem.style.color !== flag)
                    continue; // return color; // color set failed - some monstrous css rule is probably taking over the color of our object
                dump_elem.style.color = word;
                if (dump_elem.style.color === flag || dump_elem.style.color === '')
                    continue; // return color; // color parse failed
                color = getComputedStyle(dump_elem).color;
                document.body.removeChild(dump_elem);
                return word;
            }
        }
        document.body.removeChild(dump_elem);
        return color;
};