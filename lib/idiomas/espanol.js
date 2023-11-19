const lenguaje = () => { return 'es' } //Español  

const smsAvisoRG = () => { return `╰⊱✅⊱ *RESULTADO* ⊱✅⊱╮\n\n` } 
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *ADVERTENCIA* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *INFORMACIÓN* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *ACCIÓN MAL USADA* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *REPORTE* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *ÉXITO* ⊱💚⊱╮\n\n` }

const smsRowner = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO EL NÚMERO DEL BOT PUEDE USAR!!\`\`\`` }
const smsOwner = () => { return `\`\`\`Solo el mantenedor puede usar este comando.\`\`\`` }
const smsMods = () => { return `\`\`\`Solo moderadores pueden usar este comando.\`\`\`\`` }
const smsPremium = () => { return `\`\`\`Comando solo disponible para usuarios premium.\`\`\`` }
const smsGroup = () => { return `\`\`\`Este comando solo se puede usar en grupos.\`\`\`` }
const smsPrivate = () => { return `\`\`\`Este comando solamente puede utilizarse en privado\`\`\`` }
const smsAdmin = () => { return `\`\`\`Comando solamente disponible para administradores.\`\`\`` }
const smsBotAdmin = () => { return `\`\`\`Necesitas ser administrador para usar este comando.\`\`\`` }
const smsUnreg = () => { return `\`\`\`Necesitas estar registrado para usar este comando, usa #verificar para registrarte\`\`\`` }
const smsRestrict = () => { return `\`\`\`Comando restringido.\`\`\`` }

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ BIENVENIDO(A)!!*\n┊💖 @user\n┊📄 *LEA LA DESCRIPCIÓN DEL GRUPO*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ *@user*\n┊ *No es digno de estar aquí.* 🌟\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user Ahora es administrador.*'}
const smsSdemote = () => { return '*@user Ya no es administrador.*'}
const smsSdesc = () => { return '*Descripción del grupo actualizada:*\n\n@desc'}
const smsSsubject = () => { return '*Se actualizó el nombre del grupo.*\n@subject'}
const smsSicon = () => { return '*Se actualizó la imagen del grupo.*'}
const smsSrevoke = () => { return '*Se actualizó el enlace del grupo.*\n*@revoke*'}
const smsConexion = () => { return `\n╭┈ ┈ ┈ ┈ ┈ • ${packname} • ┈ ┈ ┈ ┈ ┈╮\n┊ 💚 Conexión con whatsapp exitosa. 💚\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈╯`} 
const smsCargando = () => { return `✨ ...\n`}  
const smsCodigoQR = () => { return `\n✅ Escanea el código (45 segundos). ✅`}
const smsConexionOFF = () => { return `\n⚠️ SIN CONEXIÓN, BORRE LA CARPETA ${global.authFile} Y ESCANEA EL CÓDIGO QR ⚠️`}
const smsClearTmp = () => { return `\n╭▸ ☘️ MULTIMEDIA ☘️\n┆• ARCHIVOS DE LA CARPETA TMP ELIMINADAS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSession = () => { return `\n╭▸ 🌻 ${global.authFile} 🌻\n┆• SESIONES NO ESENCIALES ELIMINADAS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles = () => { return `\n╭▸ 🌹 ARCHIVOS 🌹\n┆• ARCHIVOS RESIDUALES ELIMINADAS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB1 = () => { return `\n╭▸ 🌺 GataJadiBot 🌺\n┆• NADA POR ELIMINAR \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB2 = () => { return `\n╭▸ 🌼 GataJadiBot 🌼\n┆• ARCHIVOS NO ESENCIALES ELIMINADOS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB3 = () => { return `\n╭▸ ⚠️ GataJadiBot ⚠️\n┆• OCURRIÓ UN ERROR\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 
const smspurgeOldFiles1 = () => { return `\n╭▸ ♻️ ARCHIVO ♻️\n┆•`} 
const smspurgeOldFiles2 = () => { return `BORRADO CON ÉXITO\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles3 = () => { return `\n╭▸ ⚠️ ARCHIVO ⚠️\n┆•`} 
const smspurgeOldFiles4 = () => { return `NO SE LOGRÓ BORRAR\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 
const smsConexioncerrar = () => { return `\n⚠️ CONEXION CERRADA, RECONECTANDO....`}
const smsConexionperdida = () => { return `\n⚠️ CONEXIÓN PERDIDA CON EL SERVIDOR, RECONECTANDO....`}
const smsConexionreem = () => { return `\n⚠️ CONEXIÓN REEMPLAZADA, SE HA ABIERTO OTRA NUEVA SESION, POR FAVOR, CIERRA LA SESIÓN ACTUAL PRIMERO.`}
const smsConexionreinicio = () => { return `\n❇️ CONECTANDO AL SERVIDOR...`}
const smsConexiontiem = () => { return `\n⌛ TIEMPO DE CONEXIÓN AGOTADO, RECONECTANDO....`}
const smsConexiondescon = (reason, connection) => { return `\n⚠️❗ RAZON DE DESCONEXIÓN DESCONOCIDA: ${reason || ''} >> ${connection || ''}`}
const languageSave = () => { return `✅ El idioma ya está configurado.`} 
const languageRegister = (selectedLanguage) => { return `❇️ Se ha configurado el idioma como "${selectedLanguage}".\n`} 
const smsMainBot = () => { return "SE ACTUALIZÓ 'main.js' CON ÉXITO"}

//_antiprivado 
const smsprivado = () => { return `*No puedes ocupar este bot en privado.*\n\n*Unirte al Grupo oficial del bot para poder usar el bot*`}

//Boton
const smsConMenu = () => { return `Menú`}

//info-creadora.js
const smsCreA = () => { return 'Hola'}
const smsCreB = () => { return 'Me llamo'}
const smsCreC = () => { return 'Siempre a disposición para ayudarte 😸'}

//info-cuentas-oficiales.js
const smsOfc1 = () => { return 'Cuentas oficiales:'}
const smsOfc2 = () => { return `*❥ _Siguenos en las Cuentas Oficiales para mantenerte al tanto de_ ${packname}*`}

//info-donar.js
const smsMensajeDonar = () => { return `🌼 Se acepta apoyo voluntario por PayPal, si deseas apoyar de otra forma puedes donar un Número en Instagram para que el repositorio siga vigente, Gracias!!\n\n🌺 Siempre podrás apoyar siguiendo las Cuentas Oficiales y Compartiendo el trabajo logrado en ${packname}`}
const smsTituloDonar = () => { return '*◜🌹❤️ DONACIÓN VOLUNTARIA ❤️🌹◞*'}
const smsPrivadoDonar = () => { return '🍄 *_También puedes compartir lo siguiente como Muestra de Apoyo_*\n*_Califica el repositorio con una 🌟 Gracias!!_*'}

//info-gruposofc.js
const smsGrupoOfc1 = () => { return 'Grupos oficiales:'}
const smsGrupoOfc2 = () => { return 'Colaboración'}

//info-grupos-lista.js
const smsLisA = () => { return '_*Está en estos grupos:*_'}
const smsLisB = () => { return '*⭔ Total de Grupos:*'}
const smsLisC = () => { return '*⋄ Grupo:*'}
const smsLisD = () => { return '*⋄ ID:*'}
const smsLisE = () => { return '*⋄ Participantes:*'}

//info-estado.js
const smsCreApoyo = () => { return '✨ A P O Y O'}
const smsEstado1 = () => { return 'Estado:'}
const smsEstado2 = () => { return 'Versión'}
const smsEstado3 = () => { return 'Usuarixs'}
const smsEstado4 = () => { return 'Registradxs'}
const smsEstado5 = () => { return 'Chat/s Prohibido/s'}
const smsEstado6 = () => { return 'Usuarixs Prohibidxs'}
const smsEstado7 = () => { return 'Activo durante'}

//info-ping.js
const smsVl1 = () => { return 'Velocidad'}
const smsVl2 = () => { return 'S E R V I D O R*'}
const smsVl3 = () => { return '*🔵 RAM Libre:*'}
const smsVl4 = () => { return '*💻 Plataforma :*'}
const smsVl5 = () => { return '*📡 Lugar :*'}
const smsVl6 = () => { return '*NodeJS Uso de memoria*'}

//info-infobot.js
const smsBT1 = () => { return 'Creadorxs'}
const smsBT2 = () => { return 'Versión'}
const smsBT3 = () => { return 'Prefijo'}
const smsBT4 = () => { return 'Chats privados'}
const smsBT5 = () => { return 'Chats grupales'}
const smsBT6 = () => { return 'Chats totales'}
const smsBT7 = () => { return 'Actividad'}
const smsBT8 = () => { return 'Usuarios'}
const smsBT9 = () => { return 'SUB BOTS ACTIVOS'}
const smsCreInfo = () => { return 'Información'}

//info-contacto.js
const smsContacto1 = () => { return ' Soy ' + packname + ' un Bot dedicado en ayudar con la administración ✨'}
const smsContacto2 = () => { return 'Soy Owner de ' + packname + ' sí tienes alguna duda me la puedes decir ✌️'}
const smsContacto3 = () => { return '👑 Owner'}
const smsContacto4 = () => { return 'Contacto Oficial del bot'}
const smsContacto5 = () => { return ' ¿Le puedo ayudar en algo?'}
const smsContacto6 = () => { return 'No tengo correo 🙏'}
const smsContacto7 = () => { return '🌎 Global'}
const smsContacto8 = () => { return 'Esta Cuenta es Bot 👀'}

//ejemplos
const smsMalused = () => { return '⚡ *Usar el comando de la siguiente forma:*\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *Debes usar el comando de la siguiente manera:*\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *Responde a un mensaje con el comando o usa el siguiente ejemplo:*\n`}

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`Ocurrió un error inesperado.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`Surgió un inconveniente.\`\`\`\n`}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`Algo no funcionó correctamente, puedes reportar esto con:\`\`\`\n`}

//descargas.js
const smsYT1 = () => { return 'Título'}
const smsYT2 = () => { return 'Descripción'}
const smsYT3 = () => { return 'Duración'}
const smsYT4 = () => { return 'Vistas'}
const smsYT5 = () => { return 'Ver en youtube'}
const smsYT6 = () => { return 'Intenta con otro nombre'}

//descargas.js
const smsYTA1 = () => { return 'Descargando audio, espera un momento...'}

//descargas.js
const smsYTV1 = () => { return 'Descargando video, espera un momento...'}

//descargas.js
const smsYTA2 = () => { return 'Descargando documento de audio, espera un momento...'}

//descargas.js
const smsYTV2 = () => { return 'Descargando documento de video, espera un momento...'}

//descargas.js
const smsTiktok = () => { return 'Porfavor, espera un momento...'}

//descargas.js
const smsGit = () => { return '*ENVIANDO ARCHIVOS, UN MOMENTO 🚀*\n*SI NO LLEGA EL ARCHIVOS ES DEBIDO A QUE EL REPOSITORIO ES PESADO*'}

//_antiviewonce.js
const smsAntiView1 = () => { return `\n🪻 \`\`\`Prohibido ocultar video\`\`\` 🪻`} 
const smsAntiView2 = () => { return `\n🪷 \`\`\`Prohibido ocultar imagen\`\`\` 🪷`} 

//buscadores.js
const smsOpenai1 = () => { return '*Realiza tu busqueda, ejemplo:*'} 
const smsOpenai2 = () => { return 'Recomienda un top 10 de películas de acción'} 
const smsOpenai3 = () => { return 'Explica que es una ecuación de tercer grado y realiza un ejemplo simple y otro compuesto'} 

//convertidores.js
const smsToimg = () => { return lenguajeGB.smsAvisoMG() + '*Responde a un sticker para convertirlo en imagen*'} 

//convertidores.js
const smsConURL = () => { return lenguajeGB.smsAvisoMG() + '*Responde a una imagen para convertirla en enlace*'} 
const smsConURL1 = () => { return '🔗 *Enlace*'} 
const smsConURL2 = () => { return '⚖️ *Tamaño*'} 
const smsConURL3 = () => { return '♻️ *Caducidad*'} 
const smsConURL4 = () => { return '🪄 *Enlace acortado*'}
const smsConURLERR1 = () => { return 'Infinita'} 
const smsConURLERR2 = () => { return 'Desconocida'} 

//convertidores.js
const smsConVIDEO = () => { return lenguajeGB.smsAvisoMG() + '*Responde a un sticker para convertirlo a video*'} 
const smsConVIDEO2 = () => { return lenguajeGB.smsAvisoMG() + '*Solo puedes convertir stickers en movimiento*'} 
const smsConVIDEO3 = () => { return lenguajeGB.smsAvisoEG() + '*Aquí está el resultado*'} 

//convertidores.js
const smsConGIF = () => { return lenguajeGB.smsAvisoMG() + '*Responde a un video para convertirlo a GIF con audio*'} 
const smsConGIF2 = () => { return lenguajeGB.smsAvisoMG() + '*EL tipo de archivo no es el correcto* '} 
const smsConGIF3 = () => { return lenguajeGB.smsAvisoEG() + '*GIF con audio (abrir para escuchar)*'} 

//convertidores.js
const smsConVN = () => { return lenguajeGB.smsAvisoMG() + '*Responde a un video o audio para convertirlo a nota de voz.'} 
const smsConVN1 = () => { return lenguajeGB.smsAvisoFG() + '*Algo no salió bien (Video), porfavor intenta denuevo*'} 
const smsConVN2 = () => { return lenguajeGB.smsAvisoFG() + '*Algo no salió bien (Audio), porfavor intenta denuevo*'} 
const smsConVN3 = () => { return lenguajeGB.smsAvisoFG() + '*Algo no funcionó como esperaba, no pude convertir tu audio a nota de voz.*'}
const smsConVN4 = () => { return lenguajeGB.smsAvisoFG() + '*Algo no funcionó como esperaba, no pude convertir tu video a nota de voz.*'} 

//convertidores.js
const smsTradc1 = () => { return lenguajeGB.smsAvisoMG() + '*Responde a un mensaje o escribe el código y texto para convertir en audio:*\n'}
const smsTradc2 = () => { return ' (codigo) (texto)\n'} 
const smsTradc3 = () => { return lenguajeGB.lenguaje() + ' Este texto será audio\n\n'}
const smsTradc4 = () => { return '*PUEDE OBTENER EL CÓDIGO DE LOS IDIOMAS ADMITIDOS EN:*\nhttps://cloud.google.com/translate/docs/languages?hl=es-419'} 

//config.js
const smsWait = () => { return '*❤️ Porfavor, espera un momento...*'}

//descargas.js
const smsMediaFr = () => { return '❕ *_Si pesa más de 150 Mb es posible que no pueda enviarlo_*'}
const smsImageGg = () => { return '*💞 Resultado:*'}

//grupos.js
const smsGI1 = () => { return '*Información del grupo*'}
const smsGI2 = () => { return '*Id del grupo*'}
const smsGI3 = () => { return '*Nombre del grupo*'}
const smsGI4 = () => { return '*Descripción del grupo*'}
const smsGI5 = () => { return '*No hay descripción*'}
const smsGI6 = () => { return '*Número de integrantes*'}
const smsGI7 = () => { return '*Integrantes*'}
const smsGI8 = () => { return '*Creador(x) del grupo*'}
const smsGI9 = () => { return '*Admins del grupi*'}

//grupos.js
const smsAddB3 = () => { return `*Notificación para admins*`}
const smsAddB4 = () => { return `*Presencia de admins*`}
const smsAddB5 = () => { return `*Mensaje:*`}
const smsAddB6 = () => { return `Solicito a los Admins por favor.`}

//grupos-admins.js
const smsDemott = () => { return '*El número no es válido, Intenta responder al mensaje de alguien usando este ejemplo:*\n'}
const smsDemott2 = () => { return '*Ahora tiene pow en el grupo*'}
const smsDemott3 = () => { return '*Ya no tiene pow en el grupo*'}

//grupos-admins.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}*El mensaje de bienvenida ha sido configurado.*`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_Escribe el mensaje de bienvenida_*\n*_OPCIONAL PUEDE USAR LO QUE ESTA CON "@" PARA AGREGAR MÁS INFORMACIÓN:_*\n\n*⚡ @user (Mención al usuario(a))*\n*⚡ @subject (Nombre de grupo)*\n*⚡ @desc (Description de grupo)*\n\n*RECUERDE QUE LOS "@" SON OPCIONALES*`}

//grupos-admins.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}*EL mensaje de despedida ha sido configurado.*`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_ESCRIBA EL MENSAJE DE DESPEDIDA_*\n*_OPCIONAL PUEDE USAR LO QUE ESTA CON "@" PARA AGREGAR MÁS INFORMACIÓN:_*\n\n*⚡ @user (Mención al usuario(a))*\n\n*RECUERDE QUE EL "@" ES OPCIONAL*`}

//grupos-admins.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}*La descripción del grupo ha sido configurada.*`}

//grupos-admins.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*El nombre del grupo ha sido configurado.*`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*🙌 Escribe el nuevo nombre del grupo.*`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}*El nombre no puede tener más de 25 caracteres.*`}

//grupos-admins.js
const smsGrupoPP = () => { return `${lenguajeGB['smsAvisoMG']()}*Responde a una imagen para cambiar la imagen del grupo*`}
const smsGrupoPP2 = () => { return `${lenguajeGB['smsAvisoEG']()}*🪄 La imagen ha sido actualizada.*`}

//grupos-admins.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}*El enlace de invitación ha sido actualizado.*`}

//grupos-admins.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*Etiqueta o responde a un mensaje de la persona que quieres eliminar*\n\n*EJEMPLO: `}
const smskick2 = () => { return `Baneadx`}
const smskick3 = () => { return `No puedo banear a quien creó el grupo :(`}
const smskick4 = () => { return `No está en este grupo.`}

//grupos-admins.js
const smsGrupoOpen = () => { return `${lenguajeGB['smsAvisoEG']()}*Chat habilitado.*`}
const smsGrupoClose = () => { return `${lenguajeGB['smsAvisoEG']()}*Chat para integrantes deshabilitado.*`}

//grupo-tagall.js
const smstagaa = () => { return `!?!?!?`}

//grupos.js
const smsInsGC1 = () => { return `*Id*`}
const smsInsGC2 = () => { return `*Nombre*`}
const smsInsGC3 = () => { return `*Creado*`}
const smsInsGC4 = () => { return `*Admin principal*`}
const smsInsGC5 = () => { return `*Descripción*`}

//propietario(a.js
const smsResP1 = () => { return `_*🗂️ Enviando respaldo al privado*_`}
const smsResP2 = (date) => { return `*🗓️ Base de datos:* ${date}`}

//propietario(a.js
const smsPropban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*Etiqueta, responde o escribe el número de quien quieres restringir de usar comandos*\n\n*EJEMPLO:*\n*${usedPrefix + command} @${bot}*`}
const smsPropban2 = (bot) => { return `${lenguajeGB['smsAvisoFG']()}*@${bot} No puede ser baneado con este comando* `}
const smsPropban3 = (ownerNumber) => { return `${lenguajeGB.smsAvisoIIG()}😳 *No puedo banear al owner @${ownerNumber} de ${packname}*`}
const smsPropban4 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*No es necesario volver a restringir a @${number}.`}
const smsPropban5 = () => { return `${lenguajeGB['smsAvisoEG']()}*Ha sido restringido.*`}
const smsPropban6 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} No puedes ocupar comandos hasta que se revierta la restricción*`}
const smsPropban7 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*Surgió algo, puede que el usuario no esté en mi base de datos, porfavor intenta escribir ${usedPrefix + command} ${number}*\n\`\`\`SI EL ERROR CONTINÚA REPORTE ESTE COMANDO\`\`\``}

//owner-unbanuser.js
const smsPropdesban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*Etiqueta, responde o escribe el número de quien quieres habilitar para usar comandos*\n\n*EJEMPLO:*\n*${usedPrefix + command} @${bot}*`}
const smsPropdesban2 = (number) => { return `${lenguajeGB.smsAvisoIIG()}*No es necesario volver a habilitar @${number}.`}
const smsPropdesban3 = () => { return `${lenguajeGB['smsAvisoEG']()}*Usuario habilitado con éxito.* 💙`}
const smsPropdesban4 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}*@${number} Ya estás habilitado para ocupar comandos.* 🪄`}
const smsPropdesban5 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*Surgió algo, puede que el usuario no esté en mi base de datos, porfavor intenta escribir ${usedPrefix + command} ${number}*\n\`\`\`SI EL ERROR CONTINÚA REPORTE ESTE COMANDO\`\`\``}

//propietario(a).js
const smsAutoAdmin1 = () => { return '*Ya eres admin*'}
const smsAutoAdmin2 = () => { return '*No puedo hacer que seas admin 🥹🥀*'}

//owner-unbanchat.js
const smsUnbanCH1 = () => { return lenguajeGB['smsAvisoFG']() + '🗂️ *Este chat no está registrado en la base de datos*'}
const smsUnbanCH2 = () => { return lenguajeGB.smsAvisoAG() + '🌹 *Este chat no está baneado.*'}
const smsUnbanCH3 = () => { return lenguajeGB['smsAvisoEG']() + '🪄 *Este chat ha sido desbaneado, ya pueden usar los comandos.*'}

//propietario(a).js
const smsBioEd1 = () => { return `*Escribe lo que quieres que sea la biografía de* ${packname}`}
const smsBioEd2 = () => { return `*Biografía demasiado larga, por favor intenta con algo más corto.*`}
const smsBioEd3 = () => { return '✅ ```Biografía del bot cambiada con éxito.```'}

//propietario(a).js
const smsNameEd1 = () => { return `*¿Como quieres llamarme?* ${packname}`}
const smsNameEd2 = () => { return `*El nombre es demasiado largo.*`}
const smsNameEd3 = () => { return '✅ ```Nombre del bot cambiado con éxito.```'}

//propietario(a).js
const smsFotoEd1 = (usedPrefix, command) => { return `*Responde a una imagen con el comando ${usedPrefix + command} para cambiar mi foto de perfil.*`}
const smsFotoEd2 = () => { return '✅ ```Foto actualizada.```'}
const smsFotoEd3 = (usedPrefix, command) => { return `*Responde a una imagen usando el comando ${usedPrefix + command}*`}

//propietario(a).js
const smsBanChE = () => { return '✅ *Chat restringido, comandos deshabilitados.'}

//propietario(a).js
const smsBlockUn1 = (usedPrefix, command, toUser) => { return lenguajeGB.smsMalused2() + `${usedPrefix + command} ${toUser}`}
const smsBlockUn2 = (comd, ownerNumber) => { return lenguajeGB.smsAvisoAG() + `*No es posible ${comd} al owner @${ownerNumber}*`}
const smsBlockUn3 = (comd, useB) => { return `*Se ha ${comd} a ${useB} con éxito.*`}

//propietario(a).js
const smsRestarU1 = () => { return lenguajeGB['smsAvisoMG']() + '*Etiqueta, responde o escribe el número del integrante para reiniciar los datos.*'}
const smsRestarU2 = () => { return lenguajeGB['smsAvisoFG']() + '*El número no es válido para reiniciar los datos.*'}
const smsRestarU3 = (number) => { return lenguajeGB['smsAvisoEG']() + `*Se reinició a @${number} de mi base de datos.*`}

//propietario(a).js
const smsJoin1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*Envía el enlace de un grupo *\n*Ejemplo:*\n*${usedPrefix + command}* ${nna}`}
const smsJoin2 = () => { return lenguajeGB['smsAvisoEG']() + `${packname}\n*Se unió al grupo ✅.*`}

//info.js
const smsReportGB1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `*Escribe tu reporte *\n*Ejemplo:*\n\n*${usedPrefix + command}* _El comando ${usedPrefix}play no funciona._ (De 10 a 1000 Caracteres).`}
const smsReportGB2 = () => { return lenguajeGB['smsAvisoFG']() + `✨ *Mínimo 10 caracteres.*`}
const smsReportGB3 = () => { return lenguajeGB['smsAvisoFG']() + `😼 *Máximo 1000 caracteres.*`}
const smsReportGB4 = (urs, text) => { return `
💌 \`\`\`Reporte\`\`\` 💌
*⎔ Número:*
*» Wa.me/${urs}*

*⎔ Usuario:*
*» @${urs}*

*⎔ Mensaje:*
*» ${text}*`.trim()}
const smsReportGB5 = () => { return lenguajeGB['smsAvisoEG']() + `*El reporte ha sido enviado a los desarrolladores, de ser necesario tendrás una respuesta.*`}

//buscadores.js
const smsGit1 = (usedPrefix, command) => { return `*Ingresa un nombre de usuario de GitHub *\n*Ejemplo*\n\n*${usedPrefix + command}* GataNina-Li`}
const smsGit2 = () => { return '*Buscando... 🔎*'}
const smsGit3 = () => { return '🌻 *Nombre de usuario*'}
const smsGit4 = () => { return '🌼 *Bio*'}
const smsGit5 = () => { return '🌸 *Compañia*'}
const smsGit6 = () => { return '🌺 *Mail*'}
const smsGit7 = () => { return '🪷 *Blogs*'}
const smsGit8 = () => { return '🌹 *Repositorios públicos*'}
const smsGit9 = () => { return '🌷 *Escensiales públicas*'}
const smsGit10 = () => { return '🪸 *Followers*'}
const smsGit11 = () => { return '🍁 *Following*'}
const smsGit12 = () => { return '☘️ *Ubicación*'}
const smsGit13 = () => { return '🌱 *Tipo*'}
const smsGit14 = () => { return 'No encontrado'}

//jadibot-serbot.js
const smsIniJadi = () => { return `*⊹ • • ミ★ ${global.packname} ミ★ • • ⊹*\n\n*ღ ${global.packname} » _${global.vs}_*\n*ღ Versión de JadiBot » _${global.vsJB}_*\n\n🟢 *_FUNCIÓN SER SUB BOT_* 🟢\n\n*➡️ Con otro celular o en la PC escanea este QR para convertirte en Sub Bot*\n\n*1️⃣ Diríjase en los tres puntos en la esquina superior derecha*\n*2️⃣ Ir a la opción Dispositivos vinculados*\n*3️⃣ Escanee este codigo QR para iniciar sesión*\n\n📢 *¡Este código QR expira en 45 segundos!*`}
const smsIniJadi2 = () => { return `*⊹ • • • ミ★ ${global.packname} ミ★• • • ⊹*\n\n*ღ ${global.packname} » _${global.vs}_*\n*ღ Versión de JadiBot » _${global.vsJB}_*\n\n🟢 *_NUEVA FUNCIÓN DE HACERTE UN SUB BOT_* 🟢\n\n*1️⃣ Diríjase en los tres puntos en la esquina superior derecha*\n*2️⃣ Ir a la opción Dispositivos vinculados*\n*3️⃣ Da click en vincular con codigo de teléfono*\n*4️⃣ Pega el codigo a continuación*`}
const smsreenvia = () => { return `*🟢 Reenvía el comando...*`}
const smsSoloOwnerJB = () => { return `${lenguajeGB['smsAvisoAG']()}*Este comando está deshabilitado.*`}
const smsJBPrincipal = () => { return `${lenguajeGB['smsAvisoAG']()}🔵 *Para ser subbot, diríjete al número principal*\n*ღ Ingrese al siguiente enlace:*\n`}
const smsJBConexion = () => { return `${lenguajeGB['smsAvisoFG']()}🟡 *La conexión se cerró de manera inesperada, intentando reconectar...*`}
const smsJBConexionClose = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *La conexión se cerró, conectate manualmente con el comando #serbot y reescanea el código QR${lenguajeGB['smsJBConexionTrue3']()}* *Que fué enviado la primera vez.*`}
const smsJBConexionClose2 = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *Tu dispositivo se ha desconectado.*\n\n*Vuelve a conectarte, usa:\n#deletesesion para borrar datos y volver a solicitar el código QR o el código manual.`}
const smsJBConexionTrue = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *Se ha establecido la conexión.*`}
const smsJBConexionTrue2 = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *Se ha establecido la conexión, puedes conectarte usando:*`}
const smsJBConexionTrue3 = () => { return `.`}
const smsJBCargando = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}⚪ *Está conectadx, cargando mensajes...*\n\n♻️ *Opciones disponibles:*\n*» ${usedPrefix}pausarsb _(Detener la función Sub Bot)_*\n*» ${usedPrefix}eliminarsesion _(Borrar todo rastro de Sub Bot)_*\n*» ${usedPrefix}serbot _(Nuevo código QR o Conectarse si ya es Sub Bot)_*`}

//jadibot
const smsJBDel = () => { return `${lenguajeGB['smsAvisoAG']()}*Usa este comando con el bot principal.*`}
const smsJBAdios = () => { return `${lenguajeGB['smsAvisoEG']()}*Te extrañaré ): ${global.packname} Chauu🥹*`}
const smsJBCerrarS = () => { return `${lenguajeGB['smsAvisoEG']()}*Ha cerrado sesión y ha dejado de existir.*`}
const smsFoldErr = (usedPrefix, comd) => { return `*No tienes una sesión, puedes crear una usando:*\n*${usedPrefix}${comd}*\n\n*Si tienes una ID puedes saltar el paso anterior usando:*\n*${usedPrefix}${comd}* \`\`\`(ID)\`\`\``}

//jadibot
const smsJBCom1 = () => { return lenguajeGB['smsAvisoAG']() + `*Si no eres sub bot, comunícate al número principal.*`}
const smsJBCom2 = () => { return lenguajeGB['smsAvisoRG']() + `*Ha cerrado o pausado la sesión.*`}

//jadibot
const smsJBCom3 = () => { return `😺 *Lista de Sub Bots*\n\n🌟 _Puedes pedir permiso para agregar al bot a tu grupo_\n\n\`\`\`Cada usuario puede usarlo como quiera, el número principal no se hace responsable del uso de bot en sus grupos... \`\`\`\n\nSub Bot coonectado:`}
const smsJBCom4 = () => { return "*NO HAY SUB BOTS DISPONIBLE. VERIFIQUE MÁS TARDE.*"}

//propietario(a).js
const smsJBDifu1 = () => { return "*📣 Difusión para sus bots 📣*\n\n"}
const smsJBDifu2 = (numUser, difuUser, tolUser) => { return `*Difusión exitosa para ${numUser} Sub Bots*\n\n${difuUser}\n\n*Envío finalizado en ${tolUser} Segundos*`}

//propietario(a).js
const smsChatGP1 = () => { return "*Enviando el mensaje, espera un momento...*"}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => { return `✅ *COMUNICADO OFICIAL* ✅\n${readMS}\n\`\`\`${dia}, ${mes} ${año}\`\`\`\n\`\`\`${fecha} || ${tiempo}\`\`\`\n\n`}
const smsChatGP3 = (totalGP) => { return `✅ *El mensaje se envió a ${totalGP} grupo(s)*`}

//propietario(a)-getplugin.js
const smsPlugin1 = (usedPrefix, command) => { return `*Escribe el nombre del archivo o el comando para enviar el código*\n*EJEMPLO*\n\n*${usedPrefix + command} menu-menu.js*\n*${usedPrefix + command} menu*`}
const smsPlugin2 = (contenidoArchivo, contenido) => { return `\`\`\`Código de archivo ${contenidoArchivo}\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${contenido.toString()}`}
const smsPlugin3 = (text) => { return `*El código para '${text}' no fué encontrado.*`}
const smsPlugin4 = (filename, fileContent) => { return `\`\`\`Código de archivo ${filename}.js\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${fileContent.toString()}`}
const smsPlugin5 = (matchingFile, err) => { return `Error al enviar el archivo '${matchingFile}': ${err.message}`}
const smsPlugin6 = (matchingFile) => { return `Ocurrió un error al enviar el archivo '${matchingFile}'`}

//propietario(a).js
const smsJoin = (user) => { return `${packname}\n_😻 Se ha unido!_\n\n🫶`}

//propietario(a)-leavegc.js
const smsLeave = () => { return `${packname} *Abandona el grupo... 🌸*`}

//rpg-perfil.js
const smsPerfil0 = () => { return `🌸 *P E R F I L* 🌸`}
const smsPerfil1 = () => { return `Usuario`}
const smsPerfil2 = () => { return `Nombre`}
const smsPerfil3 = () => { return `Edad`}
const smsPerfil4 = () => { return `Número`}
const smsPerfil5 = () => { return `ID de registro`}

//rpg-verificar.js
const smsVerify0 = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}*Ya estás registradx!*\n*Si quieres eliminar tu registro ingresa este comando*\n*${usedPrefix}unreg numero de serie*\n\n*Si no recuerdas tu número de serie utiliza este comando*\n*${usedPrefix}myns`}
const smsVerify1 = (usedPrefix, command) => { return `${lenguajeGB['smsAvisoIIG']()}*Ingresa tu nombre y edad*\n*Ejemplo*\n\n${usedPrefix + command} GataBot.18`}
const smsVerify2 = () => { return `${lenguajeGB['smsAvisoAG']()}*Ingresa tu nombre*`}
const smsVerify3 = () => { return `${lenguajeGB['smsAvisoAG']()}*Ingresa tu edad*`}
const smsVerify4 = () => { return `${lenguajeGB['smsAvisoAG']()}*Eres muy mayor*`}
const smsVerify5 = () => { return `${lenguajeGB['smsAvisoAG']()}*Eres muy menor*`}
const smsVerify6 = () => { return `${lenguajeGB['smsAvisoAG']()}*Escribe un nombre más corto*`}
const smsVerify7 = () => { return `✅ *V E R I F I C A C I O N* ✅`}
const smsVerify8 = (usedPrefix) => { return `*El ID servirá en caso que desees modificar o eliminar el registro usando ${usedPrefix}unreg*`}
const smsVerify9 = () => { return `Insignia de verificación`}

//sticker-sticker.js
const smsSticker1 = (usedPrefix, command) => { return `*Responde a una imagen, un video o escribe ${usedPrefix + command} junto a un enlace que termine en .jpg .jpeg .gif .png*`}
const smsSticker2 = () => { return `*El video no debe durar más de 10 segundos*`}
const smsSticker3 = (usedPrefix, command) => { return `*El enlace no es válido, debe terminar en .jpg .jpeg .gif .png Ejemplo:*\n*${usedPrefix + command} ${img}*`}

//rpg-unreg.js
const smsUnreg1 = (usedPrefix, idreg) => { return `*Ingresa tu ID de registro. Si no sabes cual es usa el comando ${usedPrefix}${idreg}.*`}
const smsUnreg2 = (usedPrefix, idreg) => { return `*Su ID de registro no es correcto. Usa el comando ${usedPrefix}${idreg} para obtener tu ID.*`}
const smsUnreg3 = (usedPrefix, regbot) => { return `*Anulaste el registro de* ${packname}\n\n*Puedes usar ${usedPrefix}${regbot} para volver a registrarte.*`}

//rpg-myns.js
const smsIDserie = () => { return `⬇️ *ID de registro* ⬇️`}

//propietario(a).js
const smsBCbot1 = () => { return `✅ *Mensaje enviado:*`}
const smsBCbot2 = () => { return `Privado`}
const smsBCbot3 = () => { return `Grupo`}
const smsBCbot4 = () => { return `Total`}
const smsBCbot5 = () => { return `Tiempo total de envío:`}
const smsBCbot6 = () => { return `No se enviaron a todos los chats para evitar la saturación`}
const smsBCbot7 = () => { return `✅ *Comunicado oficial* ✅`}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `*Responde al mensaje o escribe el mensaje usando ${usedPrefix + command}*`}
const smsBCMensaje2 = () => { return `*Enviando el mensaje oficial...*`}
const smsBCMensaje3 = (totalPri, time) => { return `✅ *El mensaje ha sido enviado a ${totalPri} Chats privados*\n\n*Tiempo total de envío: ${time}*\n${totalPri >= 500000 ? '\n*No se enviaron a todos los chats para evitar saturación*' : ''}`}

//reiniciar 
const smsreiniciar = () => { return `${lenguajeGB['smsAvisoEG']()}\`\`\`✨ Reiniciando ✨\`\`\`\n${wait}`}

//config-on y off.js
const smsConfi1bot = () => { return `⚙️ *Configuración* ⚙️`}
const smsConfi2bot = () => { return `Comando`}
const smsConfi3bot = () => { return `Estado`}
const smsConfi4bot = () => { return `Para`}
const smsConfi5bot = () => { return `Activado`}
const smsConfi6bot = () => { return `Desactivado`}
const smsConfi7bot = () => { return `Este chat`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}*Es admin, no será baneadx.*`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}*Se detectó un enlace de WhatsApp*\n\n*Serás baneadx.*`}
const smsWaMismoEnlace = () => { return '*Este enlace es de este grupo, no serás baneadx.*'}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}*Se detectó un enlace*\n\n*Serás baneadx.*`}

//_allantilink.js 
const smsTextoYT = () => { return '😻 Eleth Admin '} 
const smsApagar = () => { return '❌ Desactivar'} 
const smsEncender = () => { return '✅ Activar'} 
const smsEnlaceTik = () => { return `*Se detectó un enlace de TikTok*\n\n*Serás baneadx.*`}
const smsEnlaceYt = () => { return `*Se detectó un enlace de  Youtube*\n\n*Serás baneadx.)*`}
const smsEnlaceTel = () => { return `*Se detectó un enlace de  Telegram*\n\n*Serás baneadx.*`}
const smsEnlaceFb = () => { return `*Se detectó un enlace de  Facebook*\n\n*Serás baneadx.*`}
const smsEnlaceIg = () => { return `*Se detectó un enlace de  Instagram*\n\n*Serás baneadx.*`}
const smsEnlaceTw = () => { return `*Se detectó un enlace de twitter*\n\n*Serás baneadx.*`}
const smsAllAdmin = () => { return `*Debo ser admin para eliminar usuarios*`}
const smsSoloOwner = () => { return `*Mi propietarix debe activar la opción de restringir*`}

//config-on y off.js
const smsParaAdmins = () => { return `Para admins y owner : Grupos`}
const smsParaAdYOw = () => { return `Para admins y owner : Chats`}
const smsParaOw = () => { return `Para owner : Chats`}
const smsNoGg = () => { return ` | ⚠️`}

//_anti-internacional.js
const smsInt1 = () => { return `Éste número`}
const smsInt2 = () => { return `No está permitido en este grupo`}

//handler.js
const smsCont1 = () => { return `*🥀 Comando fallando 🥀*`}
const smsCont2 = () => { return `*⛈️ Plugin:*`}
const smsCont3 = () => { return `*⛈️ Usuario:*`}
const smsCont4 = () => { return `*⛈️ Comando:*`}
const smsCont5 = () => { return `*⛈️ Error:*`}
const smsCont6 = () => { return `*✨ Reporta este mensaje ocupando #Reporte para solucionar*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*No tiene diamantes! 💎 Puede ir a la tienda con el comando*`}
const smsCont8 = () => { return ` *Diamante(s) 💎 Usado(s)*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*Necesita el nivel ➡️*`}
const smsCont10 = () => { return `*Para usar este comando, tu nivel actual es ➡️*`}
const smsCont11 = () => { return `*Actualiza con el comando*`}
const smsAntiEliminar = (userDelete) => { return `♻️ *Anti Eliminar* ♻️\n*@${userDelete} Eliminó un mensaje.*\n\n\`\`\`Enviando mensaje eliminado...\`\`\``}
const smsHandler = () => { return "Se actualizó el 'handler.js' con éxito."} 
const smsHandlerLlamar = (tagUserL, llamadaVideo) => { return `*Hola @${tagUserL} ${llamadaVideo ? 'Las videollamadas 📲' : 'Las llamadas 📞'} Están prohibidas en este grupo. Serás bloqueadx.*`} 

//audio-efectos-edit.js
const smsControlAudio1 = () => { return '*Responde a un audio o nota de voz*'}
const smsControlAudio2 = (usedPrefix, command) => { return `*Solo se adminten números, puedes usar ${usedPrefix + command} para conocer los parámetros.*`}
const smsControlAudio3 = () => { return `*Surgió un error, intenta cambiar el valor de los parámetros y recuerda, para aplicar el filtro debes responder a un audio o nota de voz.*`}
const smsControlAudio4 = () => { return `*Responde a un audio o nota de voz para aplicar el filtro*`}
const smsAudioEdit1 = (usedPrefix, command) => { return `*_Para realiazar una correción optima utiliza estos parámetros_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *20* | MAX: *20000*
⎔ Predeterminada: *94*
1️⃣👉 _Frecuencia central del filtro en Hz_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *-30* | MAX: *30*
⎔ Predeterminada: *25*
2️⃣👉 _Ganancias del filtro en dB_

⎔ *(Parámetro opcional)*
⎔ OPCIONES: *"q", "h", "o"*
⎔ Predeterminada: *o*
3️⃣👉 _Tipo de ancho de banda del filtro_
*q:* Relación de calidad, frecuencia más específica.
*h:* Ancho de banda constante, igualdad en todas las frecuencias.
*o:* Ancho de banda en octavas, se duplicará o reducirá a la mitad en cada octava (cada vez que la frecuencia se duplica o se divide por dos).

⎔ *(Parámetro opcional)*
⎔ MIN: *2* | MAX: *500*
⎔ Predeterminada: *5*
4️⃣👉 _Establece el ancho de banda del filtro en X valor si usa [q, h, o]_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 200 20 o 6
${usedPrefix + command} 20 10 h
${usedPrefix + command} 1500 15

*❕ Todos los parámetros son obligatorios, si omites o se pasa de sus límites estos se agregarán al valor predeterminado, recuerda responder al aduio/Nota de voz.*`}
const smsAudioEdit2 = (usedPrefix, command) => { return `*_Para realiazar una correción optima utiliza estos parámetros_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *20* | MAX: *20000*
⎔ Predeterminada: *15*
1️⃣👉 _Frecuencia del vibrato en Hz_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *0* | MAX: *100*
⎔ Predeterminada: *0.5*
2️⃣👉 _Profundidad del vibrato, su valor final será en decimal si el valor es mayor a 95 será un entero_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 550 20 
${usedPrefix + command} 2843 43

*❕ Todos los parámetros son obligatorios, si omites o se pasa de sus límites estos se agregarán al valor predeterminado, recuerda responder al aduio/Nota de voz.*`}
const smsAudioEdit3 = (usedPrefix, command) => { return `*_Para realiazar una correción optima utiliza estos parámetros_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *8* | MAX: *32*
⎔ Predeterminada: *16*
1️⃣👉 _Nivel de cuantización de los samples de audio en bits_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *500* | MAX: *48000*
⎔ Predeterminada: *44100*
2️⃣👉 _Número de veces por segundo que se muestrea el audio_

⎔ *(Parámetro opcional)*
⎔ MIN: *0* | MAX: *100*
⎔ Predeterminada: *0.5*
3️⃣👉 _Nivel de mezcla entre el audio original y el audio con efecto de acrusher (Su valor final será un decimal si es menor a 95)_

⎔ *(Parámetro opcional)*
⎔ MIN: *0* | MAX: *100*
⎔ Predeterminada: *0.5*
4️⃣👉 _Cantidad de mezcla entre el audio original y el audio con efecto de acrusher (Su valor final será un entero si es mayor a 95)_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 10 800 20 25
${usedPrefix + command} 17 2500 67 
${usedPrefix + command} 30 8000

*❕ Todos los parámetros son obligatorios, si omites o se pasa de sus límites estos se agregarán al valor predeterminado, recuerda responder al aduio/Nota de voz.*`}
const smsAudioEdit4 = (usedPrefix, command) => { return `*_Para realiazar una correción optima utiliza estos parámetros_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *15*
⎔ Predeterminada: *4*
1️⃣👉 _Audio de entrada, debe ser ajustado a una velocidad de reproducción deseada, involucra cambio en la duración del audio_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *2000* | MAX: *2550000*
⎔ Predeterminada: *48000*
2️⃣👉 _Muestreo de audio de salida en Hz, ajuste la frecuencia de muestreo deseada_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 8 100000

*❕ Todos los parámetros son obligatorios, si omites o se pasa de sus límites estos se agregarán al valor predeterminado, recuerda responder al aduio/Nota de voz.*`}
const smsAudioEdit5 = (usedPrefix, command) => { return `*_Para realiazar una correción optima utiliza estos parámetros_*\n${usedPrefix + command} 1️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *-1024* | MAX: *1024*
⎔ Predeterminada: *6*
1️⃣👉 _Amplificador de audio en dB, un valor negativo disminuye el sonido del audio y un valor positivo aumenta el sonido del audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 10
${usedPrefix + command} -12

*❕ Todos los parámetros son obligatorios, si omites o se pasa de sus límites estos se agregarán al valor predeterminado, recuerda responder al aduio/Nota de voz.*`}
const smsAudioEdit6 = (usedPrefix, command) => { return `*_Para realiazar una correción optima utiliza estos parámetros_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *100*
⎔ Predeterminada: *1.63*
1️⃣👉 _Cambiar la velocidad de reproducción de un archivo de audio_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *8000* | MAX: *48000*
⎔ Predeterminada: *44100*
2️⃣👉 _Cambiar la frecuencia de muestreo de un archivo de audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ Todos los parámetros son obligatorios, si omites o se pasa de sus límites estos se agregarán al valor predeterminado, recuerda responder al aduio/Nota de voz.*`}
const smsAudioEdit7 = (usedPrefix, command) => { return `*_Para realiazar una correción optima utiliza estos parámetros_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *300*
⎔ Predeterminada: *1.3*
1️⃣👉 _Cambiar la velocidad de reproducción de un archivo de audio_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *4000* | MAX: *4800000*
⎔ Predeterminada: *22100*
2️⃣👉 _Cambiar la frecuencia de muestreo de un archivo de audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*❕ Todos los parámetros son obligatorios, si omites o se pasa de sus límites estos se agregarán al valor predeterminado, recuerda responder al aduio/Nota de voz.*`}
const smsAudioEdit8 = (usedPrefix, command) => { return `*_Para realiazar una correción optima utiliza estos parámetros_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *150*
⎔ Predeterminada: *1.06*
1️⃣👉 _Cambiar la velocidad de reproducción de un archivo de audio_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *1000* | MAX: *550000*
⎔ Predeterminada: *44100*
2️⃣👉 _Cambiar la frecuencia de muestreo de un archivo de audio_

⎔ *(Parámetro opcional)*
⎔ MIN: *1* | MAX: *7*
⎔ Predeterminada: *1.25*
3️⃣👉 _Ajusta la frecuencia multiplicada al valor deseado_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 30 4885 4
${usedPrefix + command} 5 100

*❕ Todos los parámetros son obligatorios, si omites o se pasa de sus límites estos se agregarán al valor predeterminado, recuerda responder al aduio/Nota de voz.*`}
const smsAudioEdit9 = (usedPrefix, command) => { return `*_Para realiazar una correción optima utiliza estos parámetros_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *32* | MAX: *16384*
⎔ Predeterminada: *512*
1️⃣👉 _Tamaño de los fragmentos de señal de audio que se procesan en cada momento_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *100*
⎔ Predeterminada: *0.75*
2️⃣👉 _Cantidad de solapamiento que se utiliza entre ventanas consecutivas, Se divide una señal de audio en segmentos o ventanas para aplicarle cierto procesamiento_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ Todos los parámetros son obligatorios, si se pasa de sus límites estos se agregarán al valor predeterminado, recuerda responder al aduio/Nota de voz.*`}
const smsAudioEdit10 = (usedPrefix, command) => { return `*_Para realiazar una correción optima utiliza estos parámetros_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *0.5* | MAX: *12*
⎔ Predeterminada: *0.7*
1️⃣👉 _Velocidad de reproducción del audio. Un valor de 1.0 es la velocidad normal, mientras que un valor mayor a 1.0 acelera la reproducción, y un valor menor a 1.0 la ralentiza._

⎔ *(Parámetro obligatorio)*
⎔ MIN: *8000* | MAX: *48000*
⎔ Predeterminada: *44100*
2️⃣👉 _Frecuencia de muestreo del audio, indica con qué frecuencia se toman muestras del sonido. Cuanto mayor sea la frecuencia de muestreo, mayor será la calidad del audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*❕ Todos los parámetros son obligatorios, si se pasa de sus límites estos se agregarán al valor predeterminado, recuerda responder al aduio/Nota de voz.*`}
const smsAudioEdit11 = (usedPrefix, command) => { return `*_Para realiazar una correción optima utiliza estos parámetros_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *5*
⎔ Predeterminada: *2*
1️⃣👉 _Modo de interpolación de movimiento utilizado por el filtro._

⎔ *(Parámetro obligatorio)*
⎔ MIN: *1* | MAX: *4*
⎔ Predeterminada: *2*
2️⃣👉 _Modo de compensación de movimiento utilizado por el filtro._

⎔ *(Parámetro opcional)*
⎔ MIN: *0* | MAX: *10*
⎔ Predeterminada: *1*
3️⃣👉 _Uso de interpolación vertical subpíxel_

⎔ *(Parámetro opcional)*
⎔ MIN: *1* | MAX: *240*
⎔ Predeterminada: *120*
4️⃣👉 _Controla la tasa de fotogramas de salida del audio_

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 2 3 7 30
${usedPrefix + command} 1 1 9
${usedPrefix + command} 4 3

*❕ Todos los parámetros son obligatorios, si omites o se pasa de sus límites estos se agregarán al valor predeterminado, recuerda responder al aduio/Nota de voz.*`}
const smsAudioEdit12 = (usedPrefix, command) => { return `*_Para realiazar una correción optima utiliza estos parámetros_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *0.5* | MAX: *10*
⎔ Predeterminada: *0.5*
1️⃣👉 _Ajusta la velocidad de reproducción del audio sin afectar el tono._

⎔ *(Parámetro obligatorio)*
⎔ MIN: *2000* | MAX: *260000*
⎔ Predeterminada: *65100*
2️⃣👉 _Ajustar la tasa de muestreo del audio, es decir, la cantidad de muestras de audio por segundo._

*»» EJEMPLOS DE USO:*
${usedPrefix + command} 3 9483
${usedPrefix + command} 0.8 3849

*❕Todos los parámetros son obligatorios, si se pasa de sus límites estos se agregarán al valor predeterminado, recuerda responder al aduio/Nota de voz.*`}
const smsAudioEdit13 = (usedPrefix, command) => { return `*_PARA REALIZAR UNA CORRECTA MODIFICACIÓN DE SU AUDIO USE ESTOS PARÁMETROS_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⎔ *(Parámetro obligatorio)*
⎔ MIN: *0.001* | MAX: *5*
⎔ Predeterminada: *0.125*
1️⃣👉 _La frecuencia de la onda pulsada en hercios (Hz)_

⎔ *(Parámetro obligatorio)*
⎔ MIN: *0.01* | MAX: *1*
⎔ Predeterminada: *1*
2️⃣👉 _Ajusta la cantidad de modulación que se aplica al audio._

*»» Ejemplos de uso:*
${usedPrefix + command} 0.555 0.50
${usedPrefix + command} 1 0.07

*❕ Todos los parámetros son obligatorios, si se pasa de sus límites estos se agregarán al valor predeterminado, recuerda responder al aduio/Nota de voz.*`}
const smsControlAudio5 = () => { return `Valores asignados:`}

//config.js
const smsConfigBot = () => { return "Se actualizó 'config.js' con éxito."}

//menu-menu.js
const smsMenuTotal1 = () => { return "Info del menú"}
const smsMenuTotal2 = () => { return "SerBot"}
const smsMenuTotal3 = () => { return "Buscador /IA"}
const smsMenuTotal4 = () => { return "Descargas"}
const smsMenuTotal5 = () => { return "Convertidor"}
const smsMenuTotal6 = () => { return "Grupo - Todos"}
const smsMenuTotal7 = () => { return "Grupo - Admins"}
const smsMenuTotal8 = () => { return "Editar efectos de audio"}
const smsMenuTotal9 = () => { return "Efectos de audio"}
const smsMenuTotal10 = () => { return "Configuración"}
const smsMenuTotal11 = () => { return "Ser verificado"}
const smsMenuTotal12 = () => { return "Propietarix"}

//Error2
const smsMensError1 = () => { return `❕ Reportar Comando ❕`} 
const smsMensError2 = () => { return `Está Fallando el siguiente comando`} 

//config.js
const smsMeWait = () => { return '*⌛ Porfavor, espera un momento...*'} 

//buscadores.js
const smsytserh1 = () => { return 'Título'} 
const smsytserh2 = () => { return 'Enlace'} 
const smsytserh3 = () => { return 'Duración'} 
const smsytserh4 = () => { return 'Subido'} 
const smsytserh5 = () => { return 'Vistas'} 

//descargas.js
const smsIAimage = () => { return '💻 *Imagen creada con DALL-E* ✨'} 
const smsIAimage2 = () => { return 'Un gato de color morado con celeste estando en Júpiter, iluminando el cosmo con su encanto con un efecto minimalista.'} 
const smsIAimage3 = () => { return '💻 *Imagen creada con Midjourney* ✨'} 
const smsIAimage4 = () => { return 'Un león bebé, corre por el charco, se refleja en el charco, fotografía.'} 

//descargas.js
const smsyFBvid1 = () => { return '*No es un enlace válido, recuerda usar el enlace de un video de Facebook.*'} 
const smsyFBvid2 = () => { return 'Video descargado (FB). 💚'} 
const smsyFBvid3 = () => { return 'Video descargado (IG). 💚'} 
const smsyFBvid4 = () => { return 'Historia descargada (FB). 💚'} 
const smsyFBvid5 = () => { return 'Video publicación de Facebook descargado. 💚'} 
const smsyFBvid6 = () => { return 'Video de Facebook descargado. 💚'}

//grupos-admin.js
const smsInvite1 = () => { return '*Sólo se aceptan números, no letras.*'} 
const smsInvite2 = (usedPrefix, command, bot) => { return `*Ingresa el numero completo (Con prefijo) de la persona que quieres invitar al grupo*\n*Ejemplo:*\n\n*${usedPrefix + command}* +${bot}`} 
const smsInvite3 = (NumeroUser, user, groupMetadata, link) => { return `✨ ¡Hola! *@${NumeroUser}* Soy ${packname}, un Bot de WhatsApp. *@${user}* te está invitando al grupo ${groupMetadata.subject}\n\n\`\`\`¡Te estaremos esperando!\`\`\`\n\n*${link}*`} 
const smsInvite4 = (NumeroUser) => { return `*Invitación enviada al privado de @${NumeroUser}*`} 

//descargas.js
const smsSP0 = (usedPrefix) => { return `🌸 _Puedes usar *${usedPrefix}spotifysearch* para obtener el enlace de la canción en específico._`} 
const smsSP1 = () => { return '✨ *Título:*'} 
const smsSP2 = () => { return '🗣️ *Artista:*'} 
const smsSP3 = () => { return '🌐 *URL*:'} 
const smsSP4 = () => { return '♻️ *Url de descarga:*'} 
const smsSP5 = () => { return '🎶 *Enviando canción...*'} 
const smsSP6 = () => { return `${lenguajeGB['smsAvisoFG']()}*No se encontraron resultados, porfavor intenta con otro enlace*`} 

//_autodetec.js
const smsAutodetec1 = (inf, usuario, m) => { return `${inf}*» ${usuario}*\n*Ha cambiado el nombre del grupo a: *\n\n*\n*${m.messageStubParameters[0]}*`} 
const smsAutodetec2 = (inf, usuario, groupMetadata) => { return `${inf}*» ${usuario}*\n*Ha cambiado la imagen:*\n*${groupMetadata.subject}*`} 
const smsAutodetec3 = (inf, usuario, m, groupMetadata) => { return `${inf}*» ${usuario}*\n*Permitió que ${m.messageStubParameters[0] == 'on' ? 'Solo admins' : 'Todos'} puedan configurar ${groupMetadata.subject}*`} 
const smsAutodetec4 = (inf, groupMetadata, usuario) => { return `${inf}*El enlace de ${groupMetadata.subject} ha sido restablecido.`} 
const smsAutodetec5 = (inf, groupMetadata, m, usuario) => { return `${inf}*${groupMetadata.subject} Ha sido ${m.messageStubParameters[0] == 'on' ? 'Cerrado 🔒' : 'Abierto 🔓'} Por ${usuario}*\n\n💬 *Desde ahora ${m.messageStubParameters[0] == 'on' ? 'Solo admins' : 'Todos'} pueden enviar mensajes*`} 
const smsAutodetec6 = (inf, m, groupMetadata, usuario) => { return `${inf}*@${m.messageStubParameters[0].split`@`[0]} Ahora es admin de*\n*» ${groupMetadata.subject}*\n\n✨ *Gracias a:*\n*» ${usuario}*`} 
const smsAutodetec7 = (inf, m, groupMetadata, usuario) => { return `${inf}*@${m.messageStubParameters[0].split`@`[0]} Ya no es admin de*\n*» ${groupMetadata.subject}*\n\n✨ *Gracias a:*\n*» ${usuario}*`} 

export default { lenguaje, smsAvisoRG, smsConexioncerrar, smsConexionperdida, smsConexionreem, smsConexionreinicio, smsConexiontiem, smsConexiondescon, smsprivado, smsreiniciar, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCodigoQR, smsConexionOFF, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsConMenu, smsCreA,
smsCreB, smsCreC, smsOfc1, smsOfc2, smsMensajeDonar, smsTituloDonar, smsPrivadoDonar, smsGrupoOfc1, smsGrupoOfc2, smsLisA, smsLisB, smsLisC, smsLisD, smsLisE, smsEstado1, smsEstado2, smsEstado3, smsEstado4, smsEstado5, smsEstado6, smsEstado7, smsVl1, smsVl2, smsVl3, smsVl4, smsVl5, smsVl6, smsBT1, smsBT2, smsBT3, smsBT4, smsBT5, smsBT6, smsBT7, smsBT8, smsBT9, smsYT1, smsYT2, smsYT3, smsYT4, smsYT5, smsYT6, smsYTA1, smsContacto1, smsContacto2, smsContacto3, smsContacto4, smsContacto5, smsContacto6, smsContacto7,
smsContacto8, smsYTV1, smsYTA2, smsYTV2, smsAntiView1, smsAntiView2, smsOpenai1, smsOpenai2, smsOpenai3, smsToimg, smsConURL, smsConURL1, smsConURL2, smsConURL3, smsConURL4, smsConURLERR1, smsConURLERR2,
smsConVIDEO, smsConVIDEO2, smsConVIDEO3, smsConGIF, smsConGIF2, smsConGIF3, smsConVN, smsConVN1, smsConVN2, smsConVN3, smsConVN4, smsTradc1, smsTradc2, smsTradc3, smsTradc4, smsWait, smsMediaFr, smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsDemott, smsDemott2, smsDemott3,
smsSetW, smsSetW2, smsSetB, smsSetB2, smsDest, smsNam1, smsNam2, smsNam3, smsGrupoPP, smsGrupoPP2, smsRestGp, smskick1, smskick2, smskick3, smskick4, smsGrupoOpen, smsGrupoClose, smstagaa, smsInsGC1, smsInsGC2, smsInsGC3, smsInsGC4, smsInsGC5, smsCreApoyo, smsCreInfo, smsResP1, smsResP2, smsPropban1, smsPropban2, smsPropban3, smsPropban4, smsPropban5,
smsPropban6, smsPropban7, smsPropdesban1, smsPropdesban2, smsPropdesban3, smsPropdesban4, smsPropdesban5, smsAutoAdmin1, smsAutoAdmin2, smsUnbanCH1, smsUnbanCH2, smsUnbanCH3,
smsBioEd1, smsBioEd2, smsBioEd3, smsNameEd1, smsNameEd2, smsNameEd3, smsFotoEd1, smsFotoEd2, smsFotoEd3, smsBanChE, smsBlockUn1, smsBlockUn2, smsBlockUn3, smsRestarU1, smsRestarU2, smsRestarU3, smsJoin1, smsJoin2, smsReportGB1, smsReportGB2, smsReportGB3, smsReportGB3, smsReportGB4, smsReportGB5, smsGit1, smsGit2,
smsGit3, smsGit4, smsGit5, smsGit6, smsGit7, smsGit8, smsGit9, smsGit10, smsGit11, smsGit12, smsGit13, smsGit14, smsIniJadi, smsSoloOwnerJB, smsJBPrincipal, smsJBConexion, smsJBConexionClose, smsJBConexionTrue, smsJBConexionTrue2, smsJBConexionTrue3, smsJBCargando, smsJBDel, smsJBAdios, 
smsJBCerrarS, smsFoldErr, smsJBCom1, smsJBCom2, smsJBCom3, smsJBCom4, smsJBDifu1, smsJBDifu2, smsChatGP1, smsChatGP2, smsChatGP3, smsPlugin1, smsPlugin2,
smsPlugin3, smsPlugin4, smsPlugin5, smsPlugin6, smsJoin, smsLeave, smsPerfil0, smsPerfil1, smsPerfil2, smsPerfil3, smsPerfil4, smsPerfil5, smsVerify0, smsVerify1, smsVerify2,
smsVerify3, smsVerify4, smsVerify5, smsVerify6, smsVerify7, smsVerify8, smsVerify9, smsSticker1, smsSticker2, smsSticker3, smsUnreg1, smsUnreg2, smsUnreg3, smsIDserie,
smsBCbot1, smsBCbot2, smsBCbot3, smsBCbot4, smsBCbot5, smsBCbot6, smsBCbot7, smsBCMensaje, smsBCMensaje2, smsBCMensaje3, smsConfi1bot, smsConfi2bot, smsConfi3bot, smsConfi4bot,
smsConfi5bot, smsConfi6bot, smsConfi7bot, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner,
smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsHandler, smsHandlerLlamar, smsWaMismoEnlace, smsParaAdmins, smsParaAdYOw, smsParaOw, smsNoGg, smsInt1, smsInt2, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7,
smsCont8, smsCont9, smsCont10, smsCont11, smsAntiEliminar, smsControlAudio1, smsControlAudio2, smsControlAudio3, smsControlAudio4, smsControlAudio5, smsAudioEdit1,
smsAudioEdit2, smsAudioEdit3, smsAudioEdit4, smsAudioEdit5, smsAudioEdit6, smsAudioEdit7, smsAudioEdit8, smsAudioEdit9, smsAudioEdit10, smsAudioEdit11, smsAudioEdit12, smsAudioEdit13,
smsConfigBot, smsMenuTotal1, smsMenuTotal2, smsMenuTotal3, smsMenuTotal4, smsMenuTotal5, smsMenuTotal6, smsMenuTotal7, smsMenuTotal8, smsMenuTotal9,
smsMenuTotal10, smsMenuTotal11, smsMenuTotal12, smsMalused, smsMalused2, smsMalused3, smsMalError, smsMalError2, smsMalError3, smsMensError1, smsMensError2, smsMeWait,
smsytserh1, smsytserh2, smsytserh3, smsytserh4, smsytserh5, smsTiktok, smsIAimage, smsIAimage2, smsIAimage3, smsIAimage4, smsyFBvid1, smsyFBvid2, smsyFBvid3,
smsyFBvid4, smsyFBvid5, smsyFBvid6, smsInvite1, smsInvite2, smsInvite3, smsInvite4, smsSP0, smsSP1, smsSP2, smsSP3, smsSP4, smsSP5, smsSP6, smsAutodetec1, smsAutodetec2,
smsAutodetec3, smsAutodetec4, smsAutodetec5, smsAutodetec6, smsAutodetec7, smsImageGg, smsGit, languageSave, languageRegister, smsMainBot, smsIniJadi2, smsreenvia, smsJBConexionClose2}
