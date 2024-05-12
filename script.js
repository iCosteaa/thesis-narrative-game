//---------------------------------------------- Variables
let userName = '';
let currentPage = 0;

//---------------------------------------------- Constants

// the story contains a list of pages
// each page contains a list of paragraphs, as well as an image (optional)
const story = [
    {
        'paragraphs': [
            "You are the renowned artist, known throughout the land for your unique ability to paint destinies. With every stroke of your metaphysical brush, you hold the power to shape the lives and fates of those who seek your guidance.",
            "In this extraordinary journey, the choices you make will ripple through the lives of various characters, leaving an indelible mark on their stories. The decisions you face will challenge your sense of morality, compassion, and the very essence of your artistry.",
            "As you encounter a diverse cast of characters with their own intricate tales, you must decide which traits to imbue their destinies with. The destiny of each character is painted in a tapestry of colors, each carrying their own unique traits, both positive and negative."
        ]
    },
    {
        'paragraphs': [
            "One cannot create art without emotion. Remember that the choices you are about to make must be based on your feelings regarding a certain character! Choosing positive traits impacts the character in a good way. Choosing negative traits negatively affects them. Do they deserve a good destiny? Or a bad one?"
        ]
    },
    {
        'paragraphs': [
            "<b>CHAPTER 1</b>",
            "TOBIAS. THE RENOWED CRIMINAL"   ]
    },
    {
        'paragraphs': [
            "You sit in your secluded forest hut, engrossed in the art of destiny painting, when an unexpected knock at the door interrupts your solitude. You open it to find a rugged man standing there, an air of uncertainty surrounding him."
        ]
    },
    {
        'paragraphs': [
            "<b>Tobias:</b> Hello there. You must be the artist who paints destinies.",
            "You regard Tobias with a measured gaze. You choose your words carefully, aware of your power to shape lives."
        ]
    },
    {
        'paragraphs': [
            "<b>${userName}:</b> That's right. What brings you here?",
            "<b>Tobias:</b> I've heard tales of your unique gift. I need your help.",
            "<b>${userName}:</b> Everyone needs my help one way or another. Why did you seek me out?",
            "You gesture towards a chair, indicating that Tobias should make himself comfortable while you prepare for the destiny painting."
        ]
    },
    {
        'paragraphs': [
            "As you set up the easel, you remain silent, your mind lost in thought. You study his face, your artist's eye searching for a connection to the past. Though you're certain you've never met him before, there's something oddly familiar about his presence."
        ]
    },
    {
        'paragraphs': [
            "<b>Tobias:</b> I've done things, you see, bad things. Things that have left scars on others. Remember the daring heists from a few years ago? I took from the rich, only to give anonymously to orphanages and struggling families. But it wasn't all benevolence. I killed innocent lives who had glimpsed my face, those who were merely in the wrong place at the wrong time. They used to call me the Invader.",
            "As Tobias mentions the infamous moniker \"The Invader\", a wave of recognition washes over you, and you remember him from the tales of his audacious exploits."
        ]
    },
    {
        'paragraphs': [
            "You notice a peculiar phenomenon. Near the canvas where you shape destinies, two colours, <font style='background-color:yellow; padding:5px'><b>yellow</b></font> and <font style='background-color:springgreen; padding:5px'><b>green</b></font>, seem to brighten, casting an unusual glow that catches your attention. These colors have both positive and negative traits."
        ],
        'image': 'images/tobias.png'
    },
    {
        'paragraphs': [
            "<b>${userName}:</b> Why did you do it, Tobias?",
            "<b>Tobias:</b> I wanted to make a difference, even if it meant breaking the law."
        ],
        'choice': {
            'text': "<br><b><u>CHOICE</u>: WHAT DO YOU THINK OF TOBIAS'S PAST?</b>",
            'options': [
                {
                    'text': "<b><u>CHOICE ONE</u></b><br>Tobias deserves a fresh start",
                    'color': 'springgreen',
                    'disabledColor': '#AAFFAA',
                    'attribute': 'healing',
                    'destiny': 1
                },
                {
                    'text': "<b><u>CHOICE TWO</u></b><br>Tobias is a coward for hiding after the deeds he had done",
                    'color': 'yellow',
                    'disabledColor': '#FFFF99',
                    'attribute': 'fear',
                    'destiny': 0
                }
            ]
        }
    },
    {
        'paragraphs': [
            "<b>${userName}:</b> Do you feel guilty about the lives you took and the actions you've done? Would you do it all over again if given the chance?",
            "<b>Tobias:</b> Guilt... it's a heavy burden I've carried. I can't change the past, but I've often wondered if there was another way. If I had the chance to do it all over again, I might still try to help those in need, but I hope to find a way that doesn't involve taking innocent lives. I feel guilty about the ones who simply saw my face or crossed my path on the night I gave the stolen money to other people. But the rich? The Lords? Pfft. Never. They deserve that and they had it coming. The rich can all rot in hell for all I care."
        ]
    },
    {
        'paragraphs': [
            "<b>${userName}:</b> Really? You do not think the rich's lives are as important as the poor?",
            "<b>Tobias:</b> No? Of course not. They do not think the poor people's lives are important, so why should I care? Speaking of. You won't believe what I found, just recently. A mysterious treasure map, hidden away in a dusty old book. It is the key to untold riches, and the chance to give back to the community. If it's true what is written in here, no one would have to starve again, at least, not for a few years."
        ],
        'choice': {
            'text': "<br><b><u>CHOICE</u>: WHAT'S MORE DEFINING TO TOBIAS'S CHARACTER?</b>",
            'options': [
                {
                    'text': "<b><u>CHOICE ONE</u></b><br>Tobias aims to bring joy to the community",
                    'color': 'yellow',
                    'disabledColor': '#FFFF99',
                    'attribute': 'joy',
                    'destiny': 1
                },
                {
                    'text': "<b><u>CHOICE TWO</u></b><br>Tobias is rather judgmental towards the rich community",
                    'color': 'springgreen',
                    'disabledColor': '#AAFFAA',                   
                    'attribute': 'judgement',
                    'destiny': 0
                }
            ]
        }
    },
    {
        'paragraphs': [
            "<b>${userName}:</b> A treasure map, you say? That's intriguing. But why the hesitation in your eyes, Tobias?",
            "<b>Tobias:</b> Here's the thing... this discovery has brought me to a crossroads. If I reveal the map to the community and lead them in the search, we might uncover a fortune that could improve everyone's lives. It's a chance to make amends for my past. But doing so would expose my criminal history, and I might face the consequences of my actions."
        ],
        'choice': {
            'text': "<br><b><u>CHOICE</u>: WHICH SENTIMENT APPEALS MORE TO YOU? THE JOY TOBIAS AIMS TO BRING, OR THE GREEDINESS FOR CARING MORE ABOUT HIS SAFETY?</b>",
            'options': [
                {
                    'text': "<b><u>CHOICE ONE</u></b><br>Tobias is hopeful that the community will benefit from the treasure map",
                    'color': 'yellow',
                    'disabledColor': '#FFFF99',
                    'attribute': 'hope',
                    'destiny': 1
                },
                {
                    'text': "<b><u>CHOICE TWO</u></b><br>Tobias cares more about his safety instead of the people's wellbeing",
                    'color': 'springgreen',
                    'disabledColor': '#AAFFAA',                   
                    'attribute': 'greed',
                    'destiny': 0
                }
            ]
        }
    },
    {
        'paragraphs': [
            "<b>${userName}:</b> I see the dilemma. On the other hand?",
            "<b>Tobias:</b> If I keep the map a secret, I avoid the risk of my past catching up with me. But I'd deny the community a chance to improve their lives. I feel like I can't risk it. I'd be thrown into jail for the rest of my life. Or even hanged. I care about people, but I care about my life more, and I am not sure I am ready to share this with them. And what about the rich people? They may take all the fortune for themselves instead of giving it to those in need."
        ],
        'choice': {
            'text': "<br><b><u>CHOICE</u>: HOW DO YOU FEEL ABOUT TOBIAS'S FEAR OF BEING CAUGHT?</b>",
            'options': [
                {
                    'text': "<b><u>CHOICE ONE</u></b><br>Tobias might get lucky and the community won't shun him",
                    'color': 'springgreen',
                    'disabledColor': '#AAFFAA',
                    'attribute': 'luck',
                    'destiny': 1
                },
                {
                    'text': "<b><u>CHOICE TWO</u></b><br>Tobias is uncertain as the rich may betray the poor for the treasure",
                    'color': 'yellow',
                    'disabledColor': '#FFFF99',
                    'attribute': 'betrayal',
                    'destiny': 0
                }
            ]
        }
    },
    {
        'destiny': {
            'positive': "POSITIVE DESTINY! Thanks to you, Tobias's desire for redemption and the potential to bring prosperity to the community through the treasure, as well as the idea of a fresh start and the opportunity to turn over a new leaf prevailed! Tobias chose to reveal the treasure map to the community, which led to its prosperity and happiness. Moreover, this provided a sense of closure and redemption for Tobias. He is even awarded with a medal of honor for this!",
            'neutral':  "NEUTRAL DESTINY! Tobias shares the map with a genuine desire to bring joy and hope to the community, as he wishes to make amends for his past. The community benefits from the map, but Tobias's fear of being recognized or betrayed persists. Over time, the fear and greed within Tobias intensify. He becomes increasingly anxious about the consequences of his actions and starts to consider ways to ensure he receives a significant portion of the treasure. The community prospers, and Tobias's internal battle escalates. Ultimately, his fear and greed lead to actions that harm his reputation and relationships with others in the community. His past remains concealed, but his destiny becomes marked by inner turmoil.",
            'negative': "NEGATIVE DESTINY! Tobias, driven by envy, greed, fear, and the anticipation of betrayal, decides to keep the treasure map hidden at all costs. His overwhelming desire for personal gain, coupled with fear and mistrust of others, leads him to hoard the map secretly. In his pursuit of safeguarding the treasure for himself and avoiding potential repercussions, Tobias's past as a criminal remains concealed. However, Tobias' destiny is marked by a profound sense of mistrust, which leads him to become insane."
        }
    },
    {
        'paragraphs': [
            "<b>CHAPTER 2</b>",
            "PRINCESS ELARA"   
        ]
    },
    {
        'paragraphs': [
            "You sense a new presence approaching that carries a different story and a unique moral dilemma. Princess Elara is about to knock on your door, her own tale waiting to be told.",
            "You open the door and, bowing, ask, \"Princess Elara?\""   
        ]
    },
    {
        'paragraphs': [
            "<b>Princess Elara:</b> Please rise. There is no need for such formalities. After all, in your hut, you are the one who has power over me.",
            "<b>${userName}:</b> What brings you to my humble abode today, Your Highness?",
            "Princess Elara takes a seat on your couch."
        ]
    },
    {
        'paragraphs': [
            "<b>Princess Elara:</b> I've heard of your unique talents, and I seek your guidance.",
            "She takes off her silk gloves and you take your seat at the easel. You already notice how the colours <font style='background-color:tomato; padding:5px'><b>red</b></font> and <font style='background-color:blueviolet; padding:5px'><b>purple</b></font> yearn to be on that canvas."   
        ],
        'image': "images/elara.png"
    },
    {
        'paragraphs': [
            "<b>Princess Elara:</b> I shall be direct. I am at a crossroad. It's about the duty I owe to my kingdom versus the desires of my heart. I am to be married to a prince from a neighboring land—a union that promises peace and prosperity for our people.",
            "<b>${userName}:</b> And the desires of your heart?",
            "<b>Princess Elara:</b> There is someone else, someone who knows nothing of crowns or courts. He's the butcher's son, and... I love him. But how can I choose personal happiness over the well-being of my kingdom?"
        ],
        'choice': {
            'text': "<br><b><u>CHOICE</u>: WHAT IS YOUR FIRST IMPRESSION OF PRINCESS ELARA?</b>",
            'options': [
                {
                    'text': "<b><u>CHOICE ONE</u></b><br>She values love and is ready to sacrifice everything for it",
                    'color': 'tomato',
                    'disabledColor': '#FF9999',
                    'attribute': 'love',
                    'destiny': 1
                },
                {
                    'text': "<b><u>CHOICE TWO</u></b><br>She is arrogant for choosing her gain over the kingdom's",
                    'color': 'blueviolet',
                    'disabledColor': '#CC99FF',
                    'attribute': 'arrogance',
                    'destiny': 0
                }
            ]
        }
    },
    {
        'paragraphs': [
            "<b>${userName}:</b> Tell me more about the prince. What kind of man is he? Will he be a good ruler beside you?",
            "<b>Princess Elara:</b> He is just and wise, well-educated in the ways of leadership and diplomacy. Our marriage would bring stability and strength to our kingdom. He would make a good king, but my heart does not yearn for him. The prince is a man of honor, bound by duty as much as I am. While he might understand my heart's conflict, he wouldn't ignore the implications such feelings have on our alliance. He values the kingdom's welfare above personal matters, perhaps more strictly than I do."
        ],
        'choice': {
            'text': "<br><b><u>CHOICE</u>: IF SHE WERE TO CHOOSE THE PRICE, WHAT WOULD PRINCESS ELARA GAIN?</b>",
            'options': [
                {
                    'text': "<b><u>CHOICE ONE</u></b><br>Wisdom, from putting people's needs above hers",
                    'color': 'blueviolet',
                    'disabledColor': '#CC99FF',
                    'attribute': 'wisdom',
                    'destiny': 1
                },
                {
                    'text': "<b><u>CHOICE TWO</u></b><br>Rage, from not following her heart's desire and going with a choice made since birth",
                    'color': 'tomato',
                    'disabledColor': '#FF9999',
                    'attribute': 'rage',
                    'destiny': 0
                }
            ]
        }
    },
    {
        'paragraphs': [
            "<b>${userName}:</b> And the butcher's son? What draws you to him?",
            "<b>Princess Elara:</b> It's his spirit, his kindness. When I am with him, I am simply Elara, not a princess. He makes me laugh, and he listens to my dreams as if they were his own. With him, I find a rare peace that I fear I will never know as a queen. And he shares the same feelings as I do, passionately so. But he's also aware of our different worlds. He fears that his love might ultimately bring me harm or disrepute. He is protective, not out of possessiveness, but from a deep-seated respect for who I am and the responsibilities I carry."
        ],
        'choice': {
            'text': "<br><b><u>CHOICE</u>: IF SHE WERE TO CHOOSE THE BUTCHER'S SON, WHAT WOULD PRINCESS ELARA GAIN?</b>",
            'options': [
                {
                    'text': "<b><u>CHOICE ONE</u></b><br>Strength, as she hopes that the kind king and queen would understand her feelings",
                    'color': 'tomato',
                    'disabledColor': '#FF9999',
                    'attribute': 'strength',
                    'destiny': 1
                },
                {
                    'text': "<b><u>CHOICE TWO</u></b><br>Instability, as the kingdom's fate is now uncertain",
                    'color': 'blueviolet',
                    'disabledColor': '#CC99FF',
                    'attribute': 'instability',
                    'destiny': 0
                }
            ]
        }
    },
    {
        'paragraphs': [
            "<b>${userName}:</b> Your heart's dilemma is a heavy one, indeed. This canvas can only capture so much, but perhaps in painting, you'll find the clarity you seek.",
            "<b>Princess Elara:</b> Yet I have one brother and sister! I am not the only child, so this duty should not fall so heavily on me!"
        ],
        'choice': {
            'text': "<br><b><u>CHOICE</u>: ULTIMATELY, WHAT WOULD HER SUBJECTS BELIEVE?</b>",
            'options': [
                {
                    'text': "<b><u>CHOICE ONE</u></b><br>They are hopeful that, no matter who she marries, it will consolidate the kingdom and the royal lineage",
                    'color': 'blueviolet',
                    'disabledColor': '#CC99FF',
                    'attribute': 'royalty',
                    'destiny': 1
                },
                {
                    'text': "<b><u>CHOICE TWO</u></b><br>Violence among the folks may arise due to the fact that a simple man may endanger the kingdom, or that a foreign prince will take over her power",
                    'color': 'tomato',
                    'disabledColor': '#FF9999',
                    'attribute': 'violence',
                    'destiny': 0
                }
            ]
        }
    },
    {
        'destiny': {
            'positive': "POSITIVE DESTINY! Princess Elara defies convention and follows her heart. She chooses to marry the butcher's son, embracing a life of love and happiness over duty and tradition. Their union is celebrated by the people, who admire Elara's courage and the sincerity of their affection.Moved by their love and the princess's unwavering commitment, the king acknowledges the depth of their bond and the butcher's son's character. In a magnanimous gesture, he offers him land and the title of earl, recognizing his worthiness to join the royal family.Elara's decision brings a newfound sense of unity and inclusivity to the kingdom, as it challenges traditional social barriers and demonstrates the power of love to overcome obstacles. It sets a precedent for future generations to follow their hearts and pursue happiness, regardless of societal expectations.",
            'neutral':  "NEUTRAL DESTINY! Princess Elara fulfills her duty by marrying the prince, but her heart remains with the butcher's son. Despite the solemn vows exchanged in the royal ceremony, Elara's love for the butcher's son persists, casting a shadow over her royal marriage. While outwardly appearing as a dutiful princess and future queen, Elara struggles internally with feelings of longing and regret. She finds solace in her secret memories of the tender moments shared with the butcher's son, holding onto them as cherished treasures amid the constraints of her royal obligations.<br>The prince, unaware of Elara's true feelings, treats her with kindness and respect, but their marriage lacks the passion and depth that she yearns for. Elara fulfills her duties as a princess with grace and dignity, but a sense of melancholy lingers beneath the surface, a reminder of the love she sacrificed for the sake of duty.",
            'negative': "NEGATIVE DESTINY! After the rumours spread, Princess Elara's reputation suffers a devastating blow, tarnishing her standing in the kingdom and resulting in her disgrace. Stripped of her royal titles and ostracized by society, she is left to navigate a world that once revered her with newfound hostility and scorn. The butcher's son, plagued by guilt and remorse over his unwitting involvement in Elara's downfall, finds himself unable to move past the role he played in her tragedy. Consumed by self-blame and tortured by the memory of their shattered romance, he withdraws into solitude, haunted by the spectre of what could have been. As the weight of their shared tragedy hangs heavy in the air, both Elara and the butcher's son are left to confront the painful consequences of their actions, grappling with the harsh reality of love lost amidst the turmoil of betrayal and deception."
        }
    },
    {
        'paragraphs': [
            "Your feedback would be greatly appreciated"
        ]  
    }

];

//---------------------------------------------- Functions
function startGame() {
    console.log("Game is starting!");
    localStorage.setItem('characterDestiny', 0);
    localStorage.setItem('currentDestiny', 0);

    document.getElementById('pixelated-painter').hidden = true;
    document.getElementById('start-button').hidden = true;
    document.getElementById('name-input-page').hidden = false;
}

function submitName(event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    // Get the user's name from the input field, save it to localstorage to be able to access it across different pages
    userName = document.getElementById('name').value;
    localStorage.setItem('userName', userName);

    // You can now use the userName variable for further processing
    console.log(`Hello, ${userName}! Let the game begin!`);

    document.getElementById('name-input-page').hidden = true;
    document.getElementById('dialogue-page').hidden = false;
    // Add logic to transition to the next part of the game or the main game page
    // window.location.href = 'dialogue-page.html';
}

function selectFirstOption(button1, button2, options) {
    // select choice 1
    button1.style.borderStyle = 'inset';
    button1.style.background = options[0].color;

    // deselect choice 2
    button2.style.borderStyle = 'outset';
    button2.style.background = options[1].disabledColor;

    // set current destiny
    localStorage.setItem('currentDestiny', options[0].destiny);
}

function selectSecondOption(button1, button2, options) {
    // deselect choice 1
    button1.style.borderStyle = 'outset';
    button1.style.background = options[0].disabledColor;

    // select choice 2
    button2.style.borderStyle = 'inset';
    button2.style.background = options[1].color;

    // set current destiny
    localStorage.setItem('currentDestiny', options[1].destiny);
}


function updateStoryText(page) {
    const storyTextElement = document.getElementById('story-text');
    if (storyTextElement === null) {
        return
    }
    // reset stuff
    storyTextElement.innerHTML = '';
    document.getElementById('choice-1-column').innerHTML = '';
    document.getElementById('choice-2-column').innerHTML = '';


    // ---------------------------------------------------- add paragraphs if needed
    // for pages without paragraphs we need to pick one of the 3 possible destinies
    if (page.paragraphs === undefined) {
        let destiny = parseInt(localStorage.getItem('characterDestiny'), 10);
        let content = '';

        if (destiny >= 3) {
            content = page.destiny.positive;
        } else if (destiny == 2) {
            content = page.destiny.neutral;
        } else {
            content = page.destiny.negative;
        }

        const paragraph = document.createElement('p');
        paragraph.innerHTML = content;
        storyTextElement.appendChild(paragraph);
        document.getElementById('next-button').innerHTML = 'Next Chapter';

        // reset destinies for new character
        localStorage.setItem('characterDestiny', 0);
        localStorage.setItem('currentDestiny', 0);
    } else {
        // add paragraphs from page
        const paragraphs = page.paragraphs;

        for (let i = 0; i < paragraphs.length; i++) {
            const paragraph = document.createElement('p');

            userName = localStorage.getItem('userName');
            paragraph.innerHTML = paragraphs[i].replace('${userName}', userName);

            storyTextElement.appendChild(paragraph);
            document.getElementById('next-button').innerHTML = 'Next';
        }
    }

    // ---------------------------------------------------- add image if needed
    if (page.image === undefined) {
        document.getElementById('story-image').src = '';
        document.getElementById('story-image').hidden = true;

    } else {
        document.getElementById('story-image').src = page.image;
        document.getElementById('story-image').hidden = false;
    }

    // ---------------------------------------------------- add choices if needed
    if (page.choice === undefined) {
        document.getElementById('next-button').disabled = false;
        document.getElementById('choice-title').innerHTML = '';
        document.getElementById('choice-title').hidden = true;
        document.getElementById('choice-1-column').hidden = true;
        document.getElementById('choice-2-column').hidden = true;
    } else {
        document.getElementById('next-button').disabled = true;
        document.getElementById('choice-title').innerHTML = page.choice.text;
        document.getElementById('choice-title').hidden = false;
        document.getElementById('choice-1-column').hidden = false;
        document.getElementById('choice-2-column').hidden = false;

        const choice1 = document.createElement('button');
        choice1.id = 'choice1';
        choice1.innerHTML = page.choice.options[0].text;
        choice1.style.background = page.choice.options[0].disabledColor;

        choice1.onclick = function(e) {
            if (choice1.style.borderStyle !== 'inset') {
                selectFirstOption(choice1, choice2, page.choice.options);
            } else {
                selectSecondOption(choice1, choice2, page.choice.options);
            }
            document.getElementById('next-button').disabled = false;
        }

        const choice2 = document.createElement('button');
        choice2.id = 'choice2';
        choice2.innerHTML = page.choice.options[1].text;
        choice2.style.background = page.choice.options[1].disabledColor;

        choice2.onclick = function(e) {
            if (choice2.style.borderStyle !== 'inset') {
                selectSecondOption(choice1, choice2, page.choice.options);
            } else {
                selectFirstOption(choice1, choice2, page.choice.options);
            }
            document.getElementById('next-button').disabled = false;
        }
        document.getElementById('choice-1-column').appendChild(choice1);
        document.getElementById('choice-2-column').appendChild(choice2);
    }
}

function nextStory() {
    if (currentPage > 0) {  
        // actually still points to the previous page since we increment only in the next if
        if (story[currentPage].choice !== undefined) {
            console.log('Recomputing destiny');
            let newDestiny = parseInt(localStorage.getItem('characterDestiny'), 10) + 
                                parseInt(localStorage.getItem('currentDestiny'), 10);
            localStorage.setItem('characterDestiny', newDestiny);
            localStorage.setItem('currentDestiny', 0);
        }
    }
    if (currentPage < story.length - 1) {
        currentPage++;
        updateStoryText(story[currentPage]);
    } 
    if (currentPage == story.length - 1) {
        document.getElementById('next-button').hidden = true;
        document.getElementById('feedback-page').hidden = false;
    }
}

//---------------------------------------------- Main
updateStoryText(story[currentPage]);
