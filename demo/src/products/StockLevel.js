export default function StockLevel({ stock }) {
    
    const stockLevelContainer = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: '4px'
    }

    let color = 'green';
    let rectHeight = 30;

    if (stock <= 10) {
        color = 'red';
        rectHeight = 10;
    } else if (stock <= 50) {
        color = 'orange';
        rectHeight = 20;
    }

    const fontColor = {
        color: color
    }

    const rectColor = {
        fill: color
    }    

    return (
        <div style={stockLevelContainer}>

            <svg width="10" height={rectHeight}>
                <rect width="10" height={rectHeight} style={rectColor} />
            </svg>

            stock
            <span style={fontColor}>{stock}</span>
        </div>
    )
}