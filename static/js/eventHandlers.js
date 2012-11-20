var eventHandler = {

    bindEvents: function () {
        $(document).bind('keydown', this.onKeyDown);
        $(window).resize(app.resize);
        $('.canvas-bg').bind('mousedown', this.onCanvasMouseDown);
        this.iconClickHandler();
        this.textAreaHandler();
    },


    onKeyDown: function (e) {
        var evt = (e) ? e : (window.event) ? window.event : null;
        if (evt) {
            var key = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
            if (key === 46) { //  DELETE
                canvasObj.onDeletePress();
            } else if (key === 37) {
                //left arrow
                canvasObj.moveObject('left');
            } else if (key === 38) {
                // up arrow
                canvasObj.moveObject('up');
            } else if (key === 39) {
                // right arrow
                canvasObj.moveObject('right');
            } else if (key === 40) {
                // down arrow
                canvasObj.moveObject('down');
            }
        }

    },

    iconClickHandler: function () {
        $('.shape_icon').on('click', function () {
           /* if (toolBar.currentShape) {
                toolBar.currentShape.removeClass('icon_selected');
            }
            $('#freeow').show();
            toolBar.currentShape = $(this);
            toolBar.currentShape.addClass('icon_selected');
            $("#freeow").freeow("", "Now click on canvas to add a new shape", {
                classes: ["gray"],
                prepend: false
            });                        */
            app.shapeToDraw = $(this).attr('id');
            toolBar.shapeSelected = true;
        })
    },

    textAreaHandler: function () {
        $('textarea').keydown(function (event) {
            canvasObj.canvas.discardActiveObject();
            if (event.keyCode == 13 && event.shiftKey) {
                event.stopPropagation();

            } else if (event.keyCode == 13) {
                chat.onTextSubmit();
                chat.chatInputElement.val('');
                return false;
            }
        });
    }

}