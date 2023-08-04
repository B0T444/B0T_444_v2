const rwClient = require("./twitterClient.js")
tweetIt()
setInterval (tweetIt,1000*17040)

function tweetIt(){

    var  min = 1
    var max = 92
    function getRndInteger(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
    }

    var song = getRndInteger(min, max)

    const pathToFile = "./media/" + song + ".mp4"


    var jsmediatags = require("jsmediatags");

    var text_tweet = ""
    jsmediatags.read( "./media/" + song + ".mp4", {
        onSuccess: function(tag) {
        var tags = tag.tags;
        text_tweet = ("𝑻𝒊𝒕𝒓𝒆 : " + tags.title + " \n" + " \n" + "🎤 : " + tags.artist + " \n" + " \n" + "💿 : " + tags.genre  + " \n");
        console.log(text_tweet);
        },
        onError: function(error) {
        console.log(':(', error.type, error.info);
        }
    });

    const tweet = async () => {
        try {
            const mediaIdVideo = await rwClient.v1.uploadMedia(pathToFile, { mimetype: 'EUploadMimeType.Mp4' },{longvideo:'true'});
            await rwClient.v2.tweetThread([
                { text: text_tweet, media: { media_ids: [mediaIdVideo] } },
              ]);
              

            
        } catch (e) {
            console.error(e)
        }
    }
    tweet()
}

