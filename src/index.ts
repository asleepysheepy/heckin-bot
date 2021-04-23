import { Client } from 'discord.js'
import { Logger } from './utils/logger'

/**
 * The main function that starts Ba.
 */
async function startDiscord (): Promise<void> {
  Logger.info('Welcome to Heckin\' Bot!')

  const client = new Client()

  try {
    await client.login(process.env.DISCORD_TOKEN)
  } catch (error) {
    Logger.error('Unable to log in to Discord, did you set your bot token?')
    process.exit()
  }

  Logger.info('Successfully logged in to Discord.')
}

startDiscord().catch((error) => {
  const errorMessage: string = error.toString()
  Logger.error(`Unable to start Bot.\n${errorMessage}`)
  process.exit()
})
