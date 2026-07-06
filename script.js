const form = document.getElementById('terminal-form');
            const input = document.getElementById('command-input');
            const output = document.getElementById('output');

            let directory = '/home/hacker/web-terminal/targets';

            form.addEventListener('submit', function(event) {
                // stop page from reloading
                event.preventDefault();

                const command = input.value.trim();
                if (command == '') return;
                
                // echo the command back to the screen
                output.innerHTML += 'hacker@web-terminal:~$ ' + command;
                
                // processing command logic called
                processCommand(command);

                // clear input box and scroll down
                input.value = '';
                window.scrollTo(0, document.body.scrollHeight);
            });

            function processCommand(cmd) {
                const commandParts = cmd.trim().split(/\s+/);

                const command = commandParts[0];
                
                const githubRealyStupid = "https://github.com/RealyStupid"; 
                const githubPacketError = "https://github.com/PacketError";

                const terminalOutputColor = "#68df79";
                const directoryColor = "#00baff";
                const fileColor = "#ffffff";
                const errorColor = "#d50000";
                const textColor = "#02cb1f";

                //---- directories ----
                //---- realystupid dir ----
                const RealyStupidDir = `<p style="color: ${fileColor}; margin: 0px; padding: 0px;">about-me.txt    my-goals.txt    contacts.txt</p>`;
                const RScontactsTXT = `<p style="color: ${fileColor}; margin: 0px; padding: 0px;">My Email:\nther3al.re4ly.stupid@gmail.com\n</p>`;
                const RSaboutmeTXT = `<p style="color: ${fileColor}; margin: 0px; padding: 0px;">Hello, I'm RealyStupid!\nI am a young dev that dabbles into almost everything.\nMy main language i use is python, but i do know C#, and litle C/C++!\nI am teaching myself cyber security and learning to become a better programer!\nI am also contributing to a website called rootthisbox.org! I helped out with creating themes for the site and hunt down and fix bugs found within the newly added admin pannel.</p>`;
                const RSmygoalsTXT = `<p style="color: ${fileColor}; margin: 0px; padding: 0px;">My goal in life is to be surrounded by computers! To have my own home server to do many high computational work! And become a full red hat hacker!`;

                //---- packet error dir ----
                const Packet_errorDir = `<p style="color: ${fileColor}; margin: 0px; padding: 0px;">about-me.txt    contacts.txt</p>`;
                const PEcontactsTXT = `<p style="color: ${fileColor}; margin: 0px; padding: 0px;">First Things First my Email:\npacket.error@proton.me\n</p>`;
                const PEaboutmeTXT = `<p style="color: ${fileColor}; margin: 0px; padding: 0px;">Hello, I'm Packet Error! and just copying everythinhg from RealyStupid :D</p>`;

                if(command === 'help'){
                    if(commandParts.length === 1){
                        output.innerHTML += `<p style="color: ${terminalOutputColor}; margin: 0px; padding: 0px;">Welcome To the web terminal made by <a href="${githubRealyStupid}" target="_blank" style="color: #00ff00; text-decoration: underline;">RealyStupid</a> and <a href="${githubPacketError}" target="_blank" style="color: #00ff00; text-decoration: underline;">Packet Error</a>!\nHere is a list of commmands to get started!:\nls) list files or folders inside a directory \ncat) read the context of the files \ncd) change the current directory (if alone it will move you to <span style="color: ${directoryColor};">/home/hacker/web-terminal/targets</span>)\npwd) show the current working directory \nclear) to clear the terminal screen</p>`;
                    }
                    else {
                        output.innerHTML += `<p style="color: ${terminalOutputColor}; margin: 0px; padding: 0px;">Too many arguments for 'help'</p>`;
                    }
                }
                else if(command === 'pwd'){
                    if(commandParts.length === 1){
                        output.innerHTML += `<p style="color: ${directoryColor}; margin: 0px; padding: 0px;">${directory}</p>`;
                    }
                    else {
                        output.innerHTML += `<p style="color: ${terminalOutputColor}; margin: 0px; padding: 0px;">Too many arguments for 'pwd'</p>`;
                    }
                }
                else if(command === 'ls') {
                    // home dir
                    if(directory === '/home/hacker/web-terminal/targets') {

                        // home dir and checking inside this dir
                        if(commandParts.length === 1){
                            output.innerHTML += `<p style="color: ${directoryColor}; margin: 0px; padding: 0px;">RealyStupid    Packet_Error</p>`;
                        }
                        // home dir and checking inside realystupid dir
                        else if(commandParts[1] === 'RealyStupid'){
                            output.innerHTML += `${RealyStupidDir}`;
                        }
                        // home dir and checking inside Packet Error dir
                        else if(commandParts[1] === 'Packet_Error'){
                            output.innerHTML += `${Packet_errorDir}`;
                        }
                        else{
                            output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">cannot access '${commandParts[1]}': No such file or directory</p>`;
                        }
                    }
                    else if(directory === '/home/hacker/web-terminal/targets/RealyStupid') {
                        if(commandParts.length === 1){
                            output.innerHTML += `${RealyStupidDir}`;
                        }
                        else if(commandParts[1] === '../Packet_Error'){
                            output.innerHTML += `${Packet_errorDir}`;
                        }
                        else{
                            output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">cannot access '${commandParts[1]}': No such file or directory</p>`;
                        }
                    }
                    else if(directory === '/home/hacker/web-terminal/targets/Packet_Error') {
                        if(commandParts.length === 1){
                            output.innerHTML += `${Packet_errorDir}`;
                        }
                        else if(commandParts[1] === 'RealyStupid'){
                            output.innerHTML += `${RealyStupidDir}`;
                        }
                        else{
                            output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">cannot access '${commandParts[1]}': No such file or directory</p>`;
                        }
                    }

                    else{
                        output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">Internal directory error</p>`;
                    }
                }
                else if(command === 'cd'){
                    if(commandParts.length === 1){
                        directory = '/home/hacker/web-terminal/targets';
                        output.innerHTML += `<p style="color: ${terminalOutputColor}; margin: 0px; padding: 0px;"></p>`;
                    }
                    // if inside home dir moving to other dir
                    else if(directory === '/home/hacker/web-terminal/targets'){
                        if(commandParts[1] === 'RealyStupid'){
                            directory = '/home/hacker/web-terminal/targets/RealyStupid';
                            output.innerHTML += `<p style="color: ${terminalOutputColor}; margin: 0px; padding: 0px;"></p>`;
                        }
                        else if(commandParts[1] === 'Packet_Error'){
                            directory = '/home/hacker/web-terminal/targets/Packet_Error';
                            output.innerHTML += `<p style="color: ${terminalOutputColor}; margin: 0px; padding: 0px;"></p>`;
                        }
                        else{
                            output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">cd: ${commandParts[1]}: No such file or directory</p>`;
                        }
                    }
                    else if (directory === '/home/hacker/web-terminal/targets/RealyStupid'){
                        if(commandParts[1] === '..' || commandParts[1] === '../'){
                            directory = '/home/hacker/web-terminal/targets';
                            output.innerHTML += `<p style="color: ${terminalOutputColor}; margin: 0px; padding: 0px;"></p>`;
                        }
                        else{
                            output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">cd: ${commandParts[1]}: No such file or directory</p>`;
                        }
                    }
                    else if (directory === '/home/hacker/web-terminal/targets/Packet_Error'){
                        if(commandParts[1] === '..' || commandParts[1] === '../'){
                            directory = '/home/hacker/web-terminal/targets';
                            output.innerHTML += `<p style="color: ${terminalOutputColor}; margin: 0px; padding: 0px;"></p>`;
                        }
                        else{
                            output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">cd: ${commandParts[1]}: No such file or directory</p>`;
                        }
                    }
                    else{
                        output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">Internal directory error</p>`;
                    }
                }
                else if(command === 'cat'){
                    if(commandParts.length === 1){
                        output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">No file passed</p>`;
                    }
                    else if(directory === '/home/hacker/web-terminal/targets/RealyStupid'){
                        if(commandParts[1] === 'contacts.txt'){
                            output.innerHTML += `${RScontactsTXT}`;
                        }
                        else if(commandParts[1] === 'about-me.txt'){
                            output.innerHTML += `${RSaboutmeTXT}`;
                        }
                        else if(commandParts[1] === 'my-goals.txt'){
                            output.innerHTML += `${RSmygoalsTXT}`;
                        }
                        else{
                            output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">cannot access '${commandParts[1]}': No such file or directory</p>`;
                        }
                    }
                    else if( directory === '/home/hacker/web-terminal/targets/Packet_Error'){
                        if(commandParts[1] === 'about-me.txt'){
                            output.innerHTML += `${PEaboutmeTXT}`;
                        }
                        else if(commandParts[1] === 'contacts.txt'){
                            output.innerHTML += `${PEcontactsTXT}`;
                        }
                        else{
                            output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">cannot access '${commandParts[1]}': No such file or directory</p>`;
                        }
                    }
                    else{
                        output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;">cannot access '${commandParts[1]}': No such file or directory</p>`;
                    }
                }
                else if(command === 'clear'){
                    output.innerHTML = '';
                }
                else {
                    output.innerHTML += `<p style="color: ${errorColor}; margin: 0px; padding: 0px;"><span style="color: #fb2b2b;">${command}</span>: command not found...</p>`;
                }
            }