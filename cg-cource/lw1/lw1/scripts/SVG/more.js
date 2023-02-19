export const getSVGMore = () => {
    const div = document.createElement('div');
  
    div.className = 'more';
    div.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="120" viewPort="0 0 120 120" version="1.1">
            <polygon points="20 111, 35 98, 85 98, 100 111" fill="silver"></polygon>
            <line x1="20" y1="111" x2="35" y2="98" stroke="black" />
            <line x1="35" y1="98" x2="85" y2="98" stroke="black" />
            <line x1="85" y1="98" x2="100" y2="111" stroke="black" />
            <line x1="100" y1="111" x2="20" y2="111" stroke="black" />
            <line x1="30" y1="108" x2="38" y2="100" stroke="black" />
            <line x1="39" y1="108" x2="41" y2="100" stroke="black" />
            <line x1="45" y1="108" x2="46" y2="100" stroke="black" />
            <line x1="51" y1="108" x2="51" y2="100" stroke="black" />
            <line x1="57" y1="108" x2="57" y2="100" stroke="black" />
            <line x1="63" y1="108" x2="63" y2="100" stroke="black" />
            <line x1="69" y1="108" x2="69" y2="100" stroke="black" />
            <line x1="75" y1="108" x2="74" y2="100" stroke="black" />
            <line x1="81" y1="108" x2="79" y2="100" stroke="black" />
            <line x1="90" y1="108" x2="82" y2="100" stroke="black" />
            <line x1="30" y1="105" x2="87" y2="105" stroke="black" />
            <polygon points="35 97, 35 57, 85 57, 85 97" fill="silver"></polygon>
            <line x1="35" y1="97" x2="35" y2="57" stroke="black" />
            <line x1="35" y1="57" x2="85" y2="57" stroke="black" />
            <line x1="85" y1="57" x2="85" y2="97" stroke="black" />
            <line x1="85" y1="97" x2="35" y2="97" stroke="black" />
            <rect x="40" y="65" width="40" height="25" fill="white" />
        </svg>
    `;
  
    return div;
}