const form = document.getElementById('terminal-form');
const input = document.getElementById('command-input');
const output = document.getElementById('output');

let directory = '/home';

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const command = input.value.trim();
    if (command === '') return;
    
    // Das Echo bleibt komplett flach, passend zum neuen CSS ohne margin-Krieg
    output.innerHTML += `<p style="margin: 0px; padding: 0px;">hacker@web-terminal${directory}:~$ ${command}</p>`;
    
    // Befehl verarbeiten
    processCommand(command);

    // Eingabefeld leeren
    input.value = '';
    
    // WICHTIG FÜR HANDYS: Fokus neu setzen & reibungslos nach unten scrollen
    setTimeout(() => { 
        input.focus(); 
        input.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 10);

    // Prompt aktualisieren
    document.getElementById('prompt-prefix').innerHTML = `hacker@web-terminal${directory}:~$`;
});

// Aktiviert das Input-Feld, egal wo man auf die Seite klickt
document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') return;
    
    // Verhindert Fokusverlust, wenn der Nutzer Text markieren möchte
    if (window.getSelection().toString() === '') {
        input.focus();
    }
});

function processCommand(cmd) {
    const commandParts = cmd.trim().split(/\s+/);
    const command = commandParts[0];
    
    const githubPacketError = "https://github.com/PacketError";
    const githubRealyStupid = "https://github.com/RealyStupid"; 

    const terminalOutputColor = "#68df79";
    const directoryColor = "#00baff";
    const fileColor = "#ffffff";
    const errorColor = "#d50000";

    // ---- REALYSTUPID DIR DATA ----
    const RealyStupidDir = `<p style="color: ${fileColor}; margin: 0px; padding: 0px;">about-me.txt    my-goals.txt    contacts.txt</p>`;
    const RScontactsTXT = `<p style="color: ${fileColor}; margin: 0px; padding: 0px;">My Email:\nther3al.re4ly.stupid@gmail.com\n</p>`;
    const RSaboutmeTXT = `<p style="color: ${fileColor}; margin: 0px; padding: 0px; white-space: pre-wrap;">Hello, I'm RealyStupid!\nI am a young dev that dabbles into almost everything.\nMy main language i use is python, but i do know C#, and litle C/C++!\nI am teaching myself cyber security and learning to become a better programer!\nI am also contributing to a website called rootthisbox.org! I helped out with creating themes for the site and hunt down and fix bugs found within the newly added admin pannel.</p>`;
    const RSmygoalsTXT = `<p style="color: ${fileColor}; margin: 0px; padding: 0px;">My goal in life is to be surrounded by computers! To have my own home server to do many high computational work! And become a full red hat hacker!</p>`;

    // ---- PACKET ERROR DIR DATA ----
    const Packet_errorDir = `<p style="color: ${fileColor}; margin: 0px; padding: 0px;">about-me.txt    contacts.txt   </p>`;
    const PEcontactsTXT = `<p style="color: ${fileColor}; margin: 0px; padding: 0px;">First Things First my Email:\npacket.error@proton.me\n</p>`;
    const PEaboutmeTXT = `<p style="color: ${fileColor}; margin: 0px; padding: 0px;">Hello, I'm Packet Error! and just copying everything from RealyStupid :D</p>`;
    // const PElinkTXT = `<p style="color: ${fileColor}; margin: 0px; padding: 0px;">My Links:<br><a href="https://www.example.com">Nothing Here</a></p>`;

    if (command === 'help') {
        if (commandParts.length === 1) {
            output.innerHTML += `<p style="color: ${terminalOutputColor}; margin: 0px; padding: 0px; white-space: pre-wrap;">Welcome To the web terminal made by <a href="${githubRealyStupid}" target="_blank" style="color: #00ff00; text-decoration: underline;">RealyStupid</a> and <a href="${githubPacketError}" target="_blank" style="color: #00ff00; text-decoration: underline;">PacketError</a>!\nHere is a list of commands to get started!:\nls) list files or folders inside a directory \ncat) read the context of the files \ncd) change the current directory (if alone it will move you to <span style="color: ${directoryColor};">/home</span>)\npwd) show the current working directory \nclear) to clear the terminal screen\necho) to echo some text lol</p>`;
        } else {
            output.innerHTML += `<p style="color: ${terminalOutputColor}; margin: 0px; padding: 0px;">Too many arguments for 'help'</p>`;
        }
    }
    else if (command === 'pwd') {
        if (commandParts.length === 1) {
            output.innerHTML += `<p style="color: ${directoryColor}; margin: 0px; padding: 0px;">web-terminal${directory}</p>`;
        } else {
            output.innerHTML += `<p style="color: ${terminalOutputColor}; margin: 0px; padding: 0px;">Too many arguments for 'pwd'</p>`;
        }
    }
    else if (command === 'ls') {
        if (directory === '/home') {
            if (commandParts.length === 1) {
                output.innerHTML += `<p style="color: ${directoryColor}; margin: 0px; padding: 0px;">RealyStupid    PacketError</p>`;
            } else if (commandParts[1] === '/RealyStupid' || commandParts[1] === 'RealyStupid') {
                output.innerHTML += `${RealyStupidDir}`;
            } else if (commandParts[1] === '/PacketError' || commandParts[1] === 'PacketError') {
                output.innerHTML += `${Packet_errorDir}`;
            } else {
                output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">cannot access '${commandParts[1]}': No such file or directory</p>`;
            }
        } 
        else if (directory === '/home/RealyStupid') {
            if (commandParts.length === 1) {
                output.innerHTML += `${RealyStupidDir}`;
            } else if (commandParts[1] === '../PacketError') {
                output.innerHTML += `${Packet_errorDir}`;
            } else {
                output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">cannot access '${commandParts[1]}': No such file or directory</p>`;
            }
        } 
        else if (directory === '/home/PacketError') {
            if (commandParts.length === 1) {
                output.innerHTML += `${Packet_errorDir}`;
            } else if (commandParts[1] === '../RealyStupid') {
                output.innerHTML += `${RealyStupidDir}`;
            } else {
                output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">cannot access '${commandParts[1]}': No such file or directory</p>`;
            }
        } else {
            output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">Internal directory error</p>`;
        }
    }
    else if (command === 'cd') {
        if (commandParts.length === 1 || commandParts[1] === '/home' || commandParts[1] === '/') {
            directory = '/home';
        }
        else if (commandParts[1] === '..' || commandParts[1] === '../') {
            directory = '/home';
        }
        else if (directory === '/home' && commandParts[1] === 'RealyStupid') {
            directory = '/home/RealyStupid';
        } 
        else if (directory === '/home' && commandParts[1] === 'PacketError') {
            directory = '/home/PacketError';
        } 
        else {
            output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">cd: ${commandParts[1]}: No such file or directory</p>`;
        }
    }
    else if (command === 'cat') {
        if (commandParts.length === 1) {
            output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">No file passed</p>`;
        } 
        else if (directory === '/home/RealyStupid') {
            if (commandParts[1] === 'about-me.txt') {
                output.innerHTML += `${RSaboutmeTXT}`;
            } else if (commandParts[1] === 'contacts.txt') {
                output.innerHTML += `${RScontactsTXT}`;
            } else if (commandParts[1] === 'my-goals.txt') {
                output.innerHTML += `${RSmygoalsTXT}`;
            } else {
                output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">cannot access '${commandParts[1]}': No such file or directory</p>`;
            }
        } 
        else if (directory === '/home/PacketError') {
            if (commandParts[1] === 'about-me.txt') {
                output.innerHTML += `${PEaboutmeTXT}`;
            } else if (commandParts[1] === 'contacts.txt') {
                output.innerHTML += `${PEcontactsTXT}`;
            // } else if (commandParts[1] === 'links.txt') {
                // output.innerHTML += `${PElinkTXT}`;
            } else {
                output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">cannot access '${commandParts[1]}': No such file or directory</p>`;
            }
        } 
        else {
            output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">cannot access '${commandParts[1]}': No such file or directory</p>`;
        }
    }
    else if (command === 'clear') {
        output.innerHTML = '';
    }
    else if (command === 'echo') {
        output.innerHTML += `<p style="color: ${terminalOutputColor}; margin: 0px; padding: 0px;">${commandParts.slice(1).join(' ')}</p>`;
    }
    else {
        output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;"><span style="color: #fb2b2b;">${command}</span>: command not found...</p>`;
    }
}
