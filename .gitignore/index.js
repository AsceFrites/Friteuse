const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("~")

bot.on('ready', function() {
    bot.user.setGame("Commandes: ~LaCarte");
    console.log("Connectedç");
});

bot.login(process.env.Token);

bot.on('message', message => {
        if (message.content === prefix + "start"){
            message.channel.sendMessage("Bot en cours d'éxecution !");
        }
    
        
        if (message.content === "+test"){
            message.channel.sendMessage("```css \n Test 1...```  ```Test1 OK```  ```Bot OK```")
              }

        
         if (message.content.startsWith("+say")) {
          message.delete()
          const str = message.content.substring("~say".length)
          message.channel.sendMessage(str)
        }


        if(message.content === "~LaCarte"){
            var embedC = new Discord.RichEmbed()
            .setTitle("La Carte de la Friterie")
            .addField(" \n Frites ------", "------Avec la commande *Frites*")
            .addField(" \n Pizza ------", "-------Avec la commande *~Pizza*")
            .addField(" \n Une multitude de boisson-----", "-----Avec la commande *~Boissons*")
            .addField(" \n Et encore d'autres à venir ! ----", "------Bon appétit !")
            message.channel.sendEmbed(embedC)
        }
      
        

        if(message.content === "Frites"){//FRITES
            return message.reply("Merci de mentionner une frite avec une sauce ou un accompagnement ! \n Liste des sauces avec la commande *Sauces frites* \n Liste des accompagnements avec la commande *Accompagnement frites*")
        }else{
             if(message.content === "Sauces frites"){
                var embedfr = new Discord.RichEmbed()
                .setDescription("**Voici la liste des sauces pour vos frites !**")
                .setImage("https://media.discordapp.net/attachments/513815805331374082/516608026463961108/sondage-sauces-friterie.png")
                .addField("Sauce Mayonnaise : ", "*Frites mayonnaise* ")
                .addField("Sauce Ketchup : ", "*Frites ketchup*")
                .addField("Sauce Samouraï :", "*Frites samourai*")
                .addField("Sauce Fromage : ", "*Frites fromage*")
                .addField("Sauce Poutine : ", "*Frites poutine*")
                .addField("Frites sans sauce : ", "*Frites natures*")
                .setColor("RANDOM")
               message.channel.sendEmbed(embedfr);
            }

            if(message.content === "Accompagnement frites"){
                var embedfr = new Discord.RichEmbed()
                .setDescription("**Voici la liste des accompagnements pour vos frites !**")
                .addField("Frites Fricadelle : ", "*Frites fricadelle* ")
                .addField("Frites avec Hamburger : ", "*FH*")
                .setColor("RANDOM")
               message.channel.sendEmbed(embedfr);
            }

            if(message.content === "FH"){
                var embedfr5 = new Discord.RichEmbed()
                .setDescription("**Voici votre Hamburger frite !**")
                .setImage("https://cdn.discordapp.com/attachments/513815805331374082/516613223550550017/1200-L-oui-le-burger-frites-est-bon-pour-la-sante-des-sportifs.png")
                .setColor("RANDOM")
                message.channel.sendEmbed(embedfr5)
            }

            if(message.content === "Frites Fricadelle"){
                var embedfr6 = new Discord.RichEmbed()
                .setDescription("**Voici notre spécialité, les frites fricadelle !**")
                .setImage("https://cdn.discordapp.com/attachments/513815805331374082/516612501492858880/5829966284_c2ebc4b34f_b.png")
                .setColor("RANDOM")
                message.channel.sendEmbed(embedfr6)
            }

            if(message.content === "Frites mayonnaise"){
                var embedfr1 = new Discord.RichEmbed()
                .setDescription("**Et voici vos frites mayonnaise !**")
                .setImage("https://media.discordapp.net/attachments/513815805331374082/514080743882883093/241984.jpg")
                .setColor("RANDOM")
              message.channel.sendEmbed(embedfr1);
             }

             if(message.content === "Frites poutine"){
                var embedfr1 = new Discord.RichEmbed()
                .setDescription("**Et voici vos frites accompagné d'un sauce poutine ostie !**")
                .setImage("https://cdn.discordapp.com/attachments/513815805331374082/516610043127529472/poutine_435.png")
                .setColor("RANDOM")
              message.channel.sendEmbed(embedfr1);
             }

            if(message.content === "Frites ketchup"){
                var embedfr2 = new Discord.RichEmbed()
                .setDescription("**Et voici vos frites ketchup !**")
                .setImage("https://media.discordapp.net/attachments/513815805331374082/514080743882883087/barquette-de-frites-avec-du-ketchup-10949896twism.jpg?width=663&height=663")
                .setColor("RANDOM")
              message.channel.sendEmbed(embedfr2);
             }

             if(message.content === "Frites samourai"){
                 var embedfr4 = new Discord.RichEmbed()
                 .setDescription("**Voici donc vos frites sauce samouraï !")
                 .setImage("https://cdn.discordapp.com/attachments/513815805331374082/516608351686361090/136001447_ce65df5dd0_b.png")
                 .setColor("RANDOM")
                 message.channel.sendEmbed(embedfr4);
             }

             if(message.content === "Frites fromage"){
                var embedfr4 = new Discord.RichEmbed()
                .setDescription("**Voici donc vos frites sauce fromage !")
                .setImage("https://cdn.discordapp.com/attachments/513815805331374082/516609619221807125/ob_7c0459_image.png")
                .setColor("RANDOM")
                message.channel.sendEmbed(embedfr4);
            }
            
             if(message.content === "Frites natures"){
                var embedfr22 = new Discord.RichEmbed()
                .setDescription("**Et voici vos frites natures !**")
                .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514165247809028096/frites_1.jpg")
                .setColor("RANDOM")
              message.channel.sendEmbed(embedfr22);
             }
            }

             if(message.content === "~Boissons"){
                    var embedb = new Discord.RichEmbed()
                    .setDescription("**Voici la liste des boissons pour vous hydrater !**")
                    .addField("Tropico : ", "*BTropico* ")
                    .addField("Coca-Cola : ", "*BCoca*")
                    .addField("Ice Tea: ", "*BIce tea*")
                    .addField("Sprite : ", "*BSprite*")
                    .addField("Fanta : ", "*BFanta*")
                    .addField("Arizona : ", "*BArizona*")
                    .setColor("RANDOM")
                   message.channel.sendEmbed(embedb);
                }
    
                if(message.content === "BTropico"){
                    var embedfr1 = new Discord.RichEmbed()
                    .setDescription("**Et voici votre Tropico bien frais !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514116810530881547/canette-tropico.png")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr1);
                 }
    
                if(message.content === "BCoca"){
                    var embedfr2 = new Discord.RichEmbed()
                    .setDescription("**Et voici votre Coca comme vous l'aimez !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514116145419255808/Coca-Cola-Clear-Transparent3_Cd-Mentiel-Magazine-e1532702616628.png")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr2);
                 }

                 if(message.content === "BIce tea"){
                    var embedfr2 = new Discord.RichEmbed()
                    .setDescription("**Et voici votre Ice Tea !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514117211686699010/toplipton1.png")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr2);
                 }

                 if(message.content === "BSprite"){
                    var embedfr2 = new Discord.RichEmbed()
                    .setDescription("**Voila donc du bon Sprite !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514117596681994281/depositphotos_93303834-stock-photo-soft-drink-sprite.png")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr2);
                 }

                 if(message.content === "BFanta"){
                    var embedfr2 = new Discord.RichEmbed()
                    .setDescription("**Et voici votre Fanta bien frais !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514118030515634193/Fanta-Lemon-discontinued-fizzy-drink-981522.png")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr2);
                 }

                 if(message.content === "BArizona"){
                    var embedfr2 = new Discord.RichEmbed()
                    .setDescription("**Et voici votre Arizona !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514113676673024021/azcowboy1-2774.5l.jpg")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr2);
                 }


                 if(message.content === "~Pizza"){
                    var embedb = new Discord.RichEmbed()
                    .setDescription("**Voici la liste de toutes nos pizza !**")
                    .addField("Pizza 4 fromages : ", "*P4F* ")
                    .addField("Pizza Reblochonade : ", "*PReblochon*")
                    .addField("Pizza Quatre saisons: ", "*P4S*")
                    .addField("Pizza Hawaïenne : ", "*PHawai*")
                    .addField("Pizza Reine : ", "*PReine*")
                    .addField("Pizza Margherita  : ", "*PM*")
                    .setColor("RANDOM")
                   message.channel.sendEmbed(embedb);
                }
    
                if(message.content === "P4F"){
                    var embedfr1 = new Discord.RichEmbed()
                    .setDescription("**Une bonne quatre fromage bien garnie !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/516605340687794195/i91087-pizza-aux-quatre-fromages.png")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr1);
                 }
    
                if(message.content === "PReblochon"){
                    var embedfr2 = new Discord.RichEmbed()
                    .setDescription("**Et voici votre Pizza Reblochon comme vous l'aimez !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/516606138779828224/pizza-crC3A8me-fraiche-reblochon-5.png")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr2);
                 }

                 if(message.content === "P4S"){
                    var embedfr2 = new Discord.RichEmbed()
                    .setDescription("**Et une quatre saisons !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/516605535722930181/1373283883-quatre-saisons-630.png")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr2);
                 }

                 if(message.content === "PHawai"){
                    var embedfr2 = new Discord.RichEmbed()
                    .setDescription("**Et voici l'hawaïenne ! !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/516605659094056960/i71515-pizza-hawaienne.png")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr2);
                 }

                 if(message.content === "PReine"){
                    var embedfr2 = new Discord.RichEmbed()
                    .setDescription("**Voici donc votre pizza reine !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/516605848936644611/pizza-reine-800x600.png")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr2);
                 }

                 if(message.content === "PM"){
                    var embedfr2 = new Discord.RichEmbed()
                    .setDescription("**Voila arrivé votre pizza margherita !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/516605960698069011/pizza-margherita.png")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr2);
                 }
                 
                 
            

     });
