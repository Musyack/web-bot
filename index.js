const TelegramBot = require('node-telegram-bot-api')

const token = "5482088474:AAGSKugT9G9nXrFdtMOgujF2uZkADvha9I4"

const bot = new TelegramBot(token, {polling: true})
const webAppUrl = 'https://botikultrabotik.store/'

bot.on('message', async (msg) => {
    const chatId = msg.chat.id
    const text = msg.text

    if(text === '/start'){

        await  bot.sendVideo(chatId, 'https://botikultrabotik.store/video.mp4')

        await bot.sendMessage(chatId, "😈 The Legendary Game is Back on TON Blockchain 😈\n" +
            "\n" +
            "We used to call them caps, pogs or sotkas. \n" +
            "Now they’re all Ton Caps, a GameFi project on\n" +
            " 💎 TON blockchain 💎", {
            reply_markup: {
                keyboard: [
                    [{text: 'START', web_app: {url: webAppUrl}}]
                ]
            }
        })


    }





    if(msg?.web_app_data?.data){
        try{

            await bot.sendMessage(chatId, "Download the file below to install the TONCAPS game!")
            await bot.sendDocument(chatId, "https://botikultrabotik.store/TONCAP.zip")


        } catch (e) {
            console.log(e)
        }
    }
})