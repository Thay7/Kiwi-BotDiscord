const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')
const moment = require('moment')
moment.locale('pt-BR')

module.exports = class Userinfo extends Command {
  constructor(client) {
    super(client)
    this.name = 'userinfo'
    this.category = 'utils'
  }


  async run({ channel, args, mentions, member, msg, client, cache }) {

    let permissions = []
    let uuser = args[0] ? msg.mentions.members.first() || msg.guild.member(args[0]) : msg.member

    if (uuser.hasPermission('ADMINISTRATOR')) permissions.push('`Administrador`')
    if (uuser.hasPermission('VIEW_AUDIT_LOG')) permissions.push('`Ver o registro de auditoria`')
    if (uuser.hasPermission('MANAGE_GUILD')) permissions.push('`Gerenciar servidor`')
    if (uuser.hasPermission('MANAGE_ROLES')) permissions.push('`Gerenciar cargos`')
    if (uuser.hasPermission('MANAGE_CHANNELS')) permissions.push('`Gerenciar canais`')
    if (uuser.hasPermission('KICK_MEMBERS')) permissions.push('`Expulsar membros`')
    if (uuser.hasPermission('BAN_MEMBERS')) permissions.push('`Banir membros`')
    if (uuser.hasPermission('CREATE_INSTANT_INVITE')) permissions.push('`Criar convite`')
    if (uuser.hasPermission('CHANGE_NICKNAME')) permissions.push('`Alterar apelido`')
    if (uuser.hasPermission('MANAGE_NICKNAMES')) permissions.push('`Gerenciar apelidos`')
    if (uuser.hasPermission('MANAGE_EMOJIS')) permissions.push('`Gerenciar emojis`')
    if (uuser.hasPermission('MANAGE_WEBHOOKS')) permissions.push('`Gerenciar webhooks`')
    if (uuser.hasPermission('VIEW_CHANNEL')) permissions.push('`Ler canais de texto e ver canais de voz`')
    if (uuser.hasPermission('SEND_MESSAGES')) permissions.push('`Enviar mensagens`')
    if (uuser.hasPermission('SEND_TTS_MESSAGES')) permissions.push('`Enviar mensagens em TTS`')
    if (uuser.hasPermission('MANAGE_MESSAGES')) permissions.push('`Gerenciar mensagens`')
    if (uuser.hasPermission('EMBED_LINKS')) permissions.push('`Inserir links`')
    if (uuser.hasPermission('ATTACH_FILES')) permissions.push('`Anexar arquivos`')
    if (uuser.hasPermission('READ_MESSAGE_HISTORY')) permissions.push('`Ver histórico de mensagens`')
    if (uuser.hasPermission('MENTION_EVERYONE')) permissions.push('`Mencionar @everyone, @here e todos os cargos`')
    if (uuser.hasPermission('USE_EXTERNAL_EMOJIS')) permissions.push('`Usar emojis externos`')
    if (uuser.hasPermission('ADD_REACTIONS')) permissions.push('`Adicionar reações`')
    if (uuser.hasPermission('CONNECT')) permissions.push('`Conectar`')
    if (uuser.hasPermission('SPEAK')) permissions.push('`Falar`')
    if (uuser.hasPermission('STREAM')) permissions.push('`Vídeo`')
    if (uuser.hasPermission('MUTE_MEMBERS')) permissions.push('`Silenciar membros`')
    if (uuser.hasPermission('DEAFEN_MEMBERS')) permissions.push('`Ensurdecer membros`')
    if (uuser.hasPermission('MOVE_MEMBERS')) permissions.push('`Mover membros`')
    if (uuser.hasPermission('USE_VAD')) permissions.push('`Usar detecção de voz`')
    if (uuser.hasPermission('PRIORITY_SPEAKER')) permissions.push('`Voz Prioritária`')
    if (permissions.length === 0) permissions.push('Sem permissões')

    let status = {
      online: {
        msg: '<:online_status:729102214202785843>',
        color: '#43b581'
      },
      idle: {
        msg: '<:idle_status:729102214316163124>',
        color: '#faa61a'
      },
      dnd: {
        msg: '<:dnd_status:729102214177488916>',
        color: '#f04747'
      },
      offline: {
        msg: '<:offline_status:729102213993070593>',
        color: '#747f8d'
      },
    }
    const guildMember = args[0] ? mentions.users.first() || await this.client.users.fetch(args[0]).catch(_ => member) : member
    const user = guildMember.user ? guildMember.user : guildMember

    if (!user && !guildMember) return channel.send('Membro não encontrado')

    const customStatus = guildMember.presence.activities.filter(a => a.type === 'CUSTOM_STATUS')
    const games = guildMember.presence.activities.filter(a => a.type === 'PLAYING').map(a => a.name)
    let uinfo = msg.mentions.users.first()
    if (uinfo) {
    } else {
      uinfo = msg.mentions.users.first() || client.users.cache.get(args[0]) || msg.author
    }

    const embed = new MessageEmbed()
      .setTitle(`${status[uinfo.presence.status].msg} ${uinfo.username}`)
      .setThumbnail(user.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
      .setColor('#DAA2CA')
      .addFields([
        {
          name: '<:kyatsu_user:729406731809194006> Tag',
          value: `\`${user.tag}\``,
          inline: true
        },
        {
          name: '<:kyatsu_rotulo:729406731628576799> ID',
          value: `\`${user.id}\``,
          inline: true
        },
        {
          name: '<:kyatsu_useredit:729406732077367397> Apelido',
          value: `${guildMember.nickname ? guildMember.nickname : 'Sem apelido...👀'}`,
          inline: true
        },
        {
          name: '<:kyatsu_resumo:729410532817371316> Status personalizado',
          value: `\`${customStatus.length === 0 ? 'Não definido' : customStatus[0].state === null ? 'Não definido' : customStatus[0].state }\``,
          inline: false
        },
        {
          name: '<:kyatsu_controle:729406732073435156> Jogando',
          value: `\`${games.length === 0 ? 'Não definido' : games.join('\n')}\``,
          inline: false
        },
        {
          name: '<:kyatsu_calendario:729406731716919379>  Criou a conta em',
          value: moment(user.createdAt).format('LLL'),
          inline: true
        },
        {
          name: '<:kyatsu_entrar:729406731591090187> Entrou no servidor:',
          value: moment(member.joinedTimestamp).format('LLL'),
          inline: true
        }
      ])
      .setFooter(msg.guild.name, msg.guild.iconURL({ format: 'png', size: 2048, dynamic: true }))
      .setTimestamp()



    channel.send(embed).then((c) => {
      c.react('729406731461066835').then(() => {})
      let Embed2 = (reaction, user, ) => reaction.emoji.id === '729406731461066835' && user.id === msg.author.id
      let Uinfos = c.createReactionCollector(Embed2, { time: 80000 })
      Uinfos.on('collect', r2 => {
        let Uinfos = new MessageEmbed()
          .setTitle(`${status[uinfo.presence.status].msg} ${uinfo.username}`)
          .setThumbnail(user.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }))
          .setColor('#DAA2CA')
          .addFields([
            {
              name: `<:kyatsu_maleta:729410550441967646>  Cargos (${member.roles.cache.filter(r => r.id !== msg.guild.id).map(roles => roles.name).length})`,
              value: `${member.roles.cache.size === 1 ? 'Sem cargos' : member.roles.cache.filter(r => r.id !== msg.guild.id).map(roles => `\`${roles.name}\``).join(', ')}`
            },
            {
              name: '<:kyatsu_configs:729406731767119963> Permissões',
              value: `${permissions.join(', ')}`
            }
          ])
        c.edit(Uinfos)
      })
    })
  }}