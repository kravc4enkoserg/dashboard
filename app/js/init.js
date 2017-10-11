$( function() {
    // dateoicker init
  var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }

    // chart init
    var ctx = document.getElementById("myChart");
    if (ctx){
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["01", "02", "04", "05", "06", "07", "08", "09", "10"],
                datasets: [{
                    label: 'Signups',
                    data: [350, 200, 250, 350, 400, 375, 275, 250, 275],
                    backgroundColor: [
                        'rgba(128, 191, 202, 1)',
                        'rgba(128, 191, 202, 1)',
                        'rgba(128, 191, 202, 1)',
                        'rgba(128, 191, 202, 1)',
                        'rgba(128, 191, 202, 1)',
                        'rgba(128, 191, 202, 1)',
                        'rgba(128, 191, 202, 1)',
                        'rgba(128, 191, 202, 1)',
                        'rgba(128, 191, 202, 1)',
                    ],
    
                },
                {
                    label: 'FTD',
                    data: [425, 180, 300, 275, 450, 100, 200, 500, 300],
                    backgroundColor: [
                        'rgba(255, 154, 56, 1)',
                        'rgba(255, 154, 56, 1)',
                        'rgba(255, 154, 56, 1)',
                        'rgba(255, 154, 56, 1)',
                        
                        'rgba(255, 154, 56, 1)',
                        'rgba(255, 154, 56, 1)',
                        'rgba(255, 154, 56, 1)',
                        'rgba(255, 154, 56, 1)',
                        'rgba(255, 154, 56, 1)',
                    ],
    
                },
                {                
                    label: 'Earned',
                    data: [425, 180, 300, 275, 450, 100, 200, 500, 300],
                    backgroundColor: [
                        'rgba(89, 182, 109, 1)',
                        'rgba(89, 182, 109, 1)',
                        'rgba(89, 182, 109, 1)',
                        'rgba(89, 182, 109, 1)',
                        
                        'rgba(89, 182, 109, 1)',
                        'rgba(89, 182, 109, 1)',
                        'rgba(89, 182, 109, 1)',
                        'rgba(89, 182, 109, 1)',
                        'rgba(89, 182, 109, 1)',
                    ],
    
                }
            ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }

    // modal init
    var modalBtns = $('[data-modal]');
    modalBtns.on('click', function (event) {
        event.preventDefault();
        var target = $(this).attr("data-modal");
        $(target).bPopup({
            closeClass: 'close-modal-btn'
        });
    });

    // scrollbar init 
    $('.scrollbar-inner').scrollbar();
    
    // formstyler init

    $('select').styler();
      

    //range slider init
    var handle = $('#custom-handle');
    var range = $('#slider');
        range.slider({
            value: 50 ,
            orientation: "horizontal",
            range: "min",
            animate: true,
            max: 168,

            create: function(event, ui) {
                handle.append('<span class="value">'+$( this ).slider( "value" ) + 'hours</span>');
                var value = handle.find('.value');
                range.slider('option', 'valueSpan', value);
            },
            slide: function( event, ui ) {
                range.slider( "option" ,"valueSpan").text(ui.value + 'hours');
            }

        });

  } );