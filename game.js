window.onload = function() {

    // The height and width ofa block
    var blockSize = 50;
    
    // Amount of blocks to fit in game area
    var xBlocks = 6, yBlocks = 14, totalBlocks = xBlocks * yBlocks;
    
    // Canvas dimensions, worked out from above values
    var width = blockSize * xBlocks, height = blockSize * yBlocks;
    
    var FPS = 30,
        
    canvas = document.getElementById('gameCanvas');

    ctx = canvas.getContext('2d');
    
    // Set Canvas height/width;
    canvas.width = width;
    canvas.height = height;
    
    // Clear function
    var clear = function() {
        ctx.fillStyle = '#000';
        
        ctx.beginPath();
        ctx.rect(0, 0, width, height);
        ctx.fill();
    }
    
    // Draws the grid in the game.
    var DrawGrid = function() {

        var row = 0;
        var gridLineScale = blockSize / 20;
        
        /**
         * At the smallest scale, the block should be 20px x 20px, 
         * With a outer border of 1px with a 1px fade on the top and left sides
         * And an inner border of 1px with a 1px fade on the top and left sides
         * Width a 1px blank space inclusive of the 20px total site at the ends
         */
        for(var i = 0; i <= totalBlocks; i++) {
            
            var gridTopLeftX = (i % xBlocks) * blockSize;
            var gridTopLeftY = row * blockSize;
            
            ctx.lineWidth = gridLineScale;
            
            // Draw outer line but leave end of 2 pix for fading effect
            ctx.beginPath();
            ctx.moveTo(gridTopLeftX, gridTopLeftY + blockSize - (gridLineScale * 2));
            ctx.lineTo(gridTopLeftX, gridTopLeftY);
            ctx.lineTo(gridTopLeftX + blockSize - (gridLineScale * 2), gridTopLeftY);
            ctx.strokeStyle = '#404040';
            ctx.stroke();
            
            // Draw 1px dot at end of outer horizontal
            ctx.beginPath();
            ctx.moveTo(gridTopLeftX + blockSize - (gridLineScale * 2), gridTopLeftY);
            ctx.lineTo(gridTopLeftX + blockSize - gridLineScale, gridTopLeftY);
            ctx.strokeStyle = '#303030';
            ctx.stroke();
            
            // Draw 1px dot at end of outer vertical
            ctx.moveTo(gridTopLeftX, gridTopLeftY + blockSize - (gridLineScale * 2));
            ctx.lineTo(gridTopLeftX, gridTopLeftY + blockSize - gridLineScale);
            ctx.stroke();
           
            // Draw inner grid lines - trickier
            ctx.beginPath();
            ctx.moveTo(gridTopLeftX + gridLineScale, gridTopLeftY + blockSize - gridLineScale);
            ctx.lineTo(gridTopLeftX + gridLineScale, gridTopLeftY + blockSize - gridLineScale * 2);
            ctx.strokeStyle = '#0c0c0c';
            ctx.stroke();
            
            // inner vertical
            ctx.beginPath();
            ctx.moveTo(gridTopLeftX + gridLineScale, gridTopLeftY + blockSize - gridLineScale * 2);
            ctx.lineTo(gridTopLeftX + gridLineScale, gridTopLeftY + gridLineScale);
            ctx.strokeStyle = '#101010';
            ctx.stroke();
            
            // inner horizontal
            ctx.beginPath();
            ctx.moveTo(gridTopLeftX + gridLineScale, gridTopLeftY + gridLineScale);
            ctx.lineTo(gridTopLeftX + + blockSize - gridLineScale * 2, gridTopLeftY + gridLineScale);
            ctx.strokeStyle = '#101010';
            ctx.stroke();
            
            // Once we have drawn a whole row of blocks, move to next row
            if( i != 0 && i % xBlocks == 0) {
                row++;
            }
        }
        
        
        
    }
    
    clear();
    DrawGrid();

}