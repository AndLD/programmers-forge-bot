require('dotenv').config()
const { Telegraf, Markup } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(startCourse)

bot.hears('menu', (ctx) => ctx.reply('Выберите действие', menu()))

bot.hears('🔍 Search', (ctx) => ctx.reply('Searching...'))

bot.hears('1', startCourse)

bot.launch()

const menu = () => {
    return Markup.keyboard([
        ['🔍 Search', '😎 Popular'],
        ['☸ Setting', '📞 Feedback'],
        ['📢 Ads', '⭐️ Rate us', '👥 Share']
    ])
        .oneTime()
        .resize()
}

const user = {
    id: 0,
    firstName: '',
    lastName: '',
    username: '',
    currentPosition: 1,
    timestamp: 0
}
const course = []
let currentPosition = 0

function createTest(ctx) {}

function startCourse(ctx) {
    saveUser(ctx)
    ctx.reply('dfd')
    ctx.reply('dgs')

    console.log()

    function saveUser(ctx) {
        const chatId = ctx.update.message.chat.id
        const messageDate = ctx.update.message.date
        const from = ctx.update.message.from

        if (from.is_bot) return

        const user = {}

        user.id = from.id
        user.chatId = chatId
        user.firstName = from.first_name
        user.lastName = from.last_name
        user.username = from.username
        user.currentPosition = 1
        user.timestamp = messageDate

        ctx.reply(user)
    }
}

console.log('Started...')
