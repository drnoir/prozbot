var TelegramBot = require( "node-telegram-bot-api" );
var bot = new TelegramBot( "513604411:AAGIHeqGcvQt-Cm45hQhnLdgDNs6uF8oNs0", { polling: true } );

bot.onText( /\/start/, function( msg ) {

    bot.sendMessage(
  
        msg.from.id,
  
        "Hi <b>" + msg.from.first_name + "</> " + msg.from.last_name + "\nWanna play?!",
  
        {
  
            parse_mode: "HTML"
  
       }
  
    );

    bot.onText( /\/play (.+)/, function( msg, match ) {

        var fromId = msg.from.id;
      
        switch( match[1] ) {
      
            case "probotskiBot":
      
                bot.sendGame(
      
                    fromId,
      
                    "probotskiBot",
      
                    {
      
                        reply_markup: JSON.stringify({
      
                            inline_keyboard: [
      
                                [ { text: "Play", callback_game: JSON.stringify( { game_short_name: "probotskibot" } ) } ],
      
                                [ { text: "Share", url: "https://telegram.me/probotskiBot" } ]
      
                            ]
      
                        })
      
                    }
      
                );
      
                break;
      
            default:
      
                bot.sendMessage( fromId, "Sorry " + msg.from.first_name + ", but this game doesn’t exist.." );
      
        }
      
      } );
  
  } );

  bot.on( "callback_query", function( cq ) {

    if ( cq.game_short_name ) {
  
        switch( cq.game_short_name ) {
  
            case "probotskiBot":
  
                bot.answerCallbackQuery( cq.id, undefined, false, { url: "http://www.noirvortex.co.uk/prozbot/assholehunter/Prozbot1.html" } );
  
                return;
  
        }
  
        bot.answerCallbackQuery( cq.id, "Sorry, '" + cq.game_short_name + "' is not available.", true );
  
    }
  
  } );

  bot.on( "inline_query", function( iq ) {

    bot.answerInlineQuery( iq.id, [ { type: "game", id: "0", game_short_name: "Probotski" } ] );
  
  } );