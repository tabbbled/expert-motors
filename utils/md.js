export default function md(data) {
    let destruct = [];
    let previous = "none";

    let trans = (str) => {
        return str.replaceAll("**", "");
    }

    data.split('\n').map((item) => {
        if (item.length > 0) {

            if (item.startsWith("# ")) {
                if (item.replace('# ', '').length > 0) {
                    destruct.push({ type: "h1", value: trans(item.replace('# ', '')), prev: previous });
                    previous = "h1"
                }
            } else if (item.startsWith("## ")) {
                if (item.replace('## ', '').length > 0) {
                    destruct.push({ type: "h2", value: trans(item.replace('## ', '')), prev: previous });
                    previous = "h2"
                }
            } else if (item.startsWith("### ")) {
                if (item.replace('### ', '').length > 0) {
                    destruct.push({ type: "h3", value: trans(item.replace('### ', '')), prev: previous });
                    previous = "h3"
                }
            } else if (item.startsWith("> ")) {
                if (item.replace('> ', '').length > 0) {
                    destruct.push({ type: "q", value: trans(item.replace('> ', '')), prev: previous });
                    previous = "q"
                }
            } else if (item.startsWith("- ")) {
                if (item.replace('- ', '').length > 0) {
                    destruct.push({ type: "li", value: trans(item.replace('- ', '')), prev: previous });
                    previous = "li"
                }
            } else if (item.startsWith("[ ] ")) {
                if (item.replace('[ ] ', '').length > 0) {
                    destruct.push({ type: "unchecked", value: trans(item.replace('[ ] ', '')), prev: previous });
                    previous = "unchecked"
                }
            } else if (item.startsWith("[x] ")) {
                if (item.replace('[x] ', '').length > 0) {
                    destruct.push({ type: "checked", value: trans(item.replace('[x] ', '')), prev: previous });
                    previous = "checked"
                }
            } else {
                destruct.push({ type: "p", value: trans(item), prev: previous })
                previous = "p"
            }
        }
    })
    return destruct
}