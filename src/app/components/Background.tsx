'use client'

import { useEffect } from "react";

const Background = () => {

    useEffect(() => {

        const svgToBase64Image = (svg: SVGElement) => {
            const div = document.createElement('div');
            div.appendChild(svg.cloneNode(true));
            const b64 = window.btoa(div.innerHTML);
            return 'data:image/svg+xml;base64,' + b64;
        }
        
        const svgs = document.getElementsByTagName('svg')
        
        let urls = [];
        for (let i = 0; i < svgs.length; i++) {
            urls.push('url("' + svgToBase64Image(svgs[i]) + '")');
        }
        const url = urls.join(',')

        console.log(url, 'URL')
        
        document.body.style.background = url

    }, [])

    return null
}

export default Background