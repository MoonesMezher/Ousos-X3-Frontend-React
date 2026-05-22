// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete Git Mastery - Version Control Fundamentals",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        
        {
            id: "git-basics",
            title: "Git Basics - Version Control Fundamentals",
            content: `
                <h3>What is Git?</h3>
                <p>Git is a distributed version control system that helps track changes in your code and collaborate with other developers.</p>
                
                <h3>Key Features of Git:</h3>
                <ul>
                    <li><strong>Distributed Version Control</strong>: Every developer has full project history</li>
                    <li><strong>Free & Open Source</strong>: Created by Linus Torvalds, completely free</li>
                    <li><strong>CLI & GUI Options</strong>: Can be used via command line or graphical interface</li>
                    <li><strong>Branching & Merging</strong>: Powerful branching model for parallel development</li>
                </ul>
                
                <h3>Why Use Git?</h3>
                <ul>
                    <li><strong>Track Changes</strong>: See who changed what and when</li>
                    <li><strong>Collaborate Efficiently</strong>: Multiple developers can work together</li>
                    <li><strong>Backup & Restore</strong>: Never lose your work</li>
                    <li><strong>Experiment Safely</strong>: Try new features without breaking main code</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>ما هو Git؟</h3>
                    <p>Git هو نظام تحكم في النسخ الموزع يساعد في تتبع التغييرات في الكود الخاص بك والتعاون مع المطورين الآخرين.</p>
                    
                    <h3>الميزات الرئيسية لـ Git:</h3>
                    <ul>
                        <li><strong>نظام تحكم في النسخ الموزع</strong>: كل مطور لديه تاريخ المشروع الكامل</li>
                        <li><strong>مجاني ومفتوح المصدر</strong>: تم إنشاؤه بواسطة Linus Torvalds، مجاني تمامًا</li>
                        <li><strong>خيارات CLI و GUI</strong>: يمكن استخدامه عبر سطر الأوامر أو الواجهة الرسومية</li>
                        <li><strong>التفرع والدمج</strong>: نموذج تفرع قوي للتطوير المتوازي</li>
                    </ul>
                    
                    <h3>لماذا نستخدم Git؟</h3>
                    <ul>
                        <li><strong>تتبع التغييرات</strong>: اعرف من غير ماذا ومتى</li>
                        <li><strong>التعاون بكفاءة</strong>: يمكن لعدة مطورين العمل معًا</li>
                        <li><strong>النسخ الاحتياطي والاستعادة</strong>: لا تفقد عملك أبدًا</li>
                        <li><strong>التجربة بأمان</strong>: جرب ميزات جديدة دون كسر الكود الرئيسي</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Git Basic Workflow Example",
                    content: `
                        <pre class="code-block">
# Initialize a new Git repository
git init

# Check the status of your repository
git status

# Add files to staging area
git add filename.txt
git add .  # Add all files

# Commit changes with a message
git commit -m "Initial commit with basic project structure"

# Check commit history
git log
git log --oneline  # Compact view

# See what files have changed
git diff
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Git Basics Practice",
                    content: `
                        <p>Practice these Git fundamentals:</p>
                        <ol>
                            <li>Create a new Git repository for a practice project</li>
                            <li>Make several commits with meaningful messages</li>
                            <li>Practice using git status and git log frequently</li>
                            <li>Create and switch between multiple branches</li>
                            <li>Experiment with undoing changes using git reset</li>
                            <li>Practice merging branches together</li>
                            <li>Set up a GitHub account and push your repository</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between Git and GitHub?",
                    answer: "Git is the version control software that runs locally on your computer, while GitHub is a cloud-based hosting service for Git repositories. Git manages version control, while GitHub provides collaboration features like pull requests, issue tracking, and project management tools. You can use Git without GitHub, but GitHub enhances Git with social and collaboration features."
                },
                {
                    question: "Why is Git considered a 'distributed' version control system?",
                    answer: "Git is distributed because every developer has a complete copy of the entire project history on their local machine. This differs from centralized systems where there's one central server. This distribution allows developers to work offline, commit changes locally, and only sync with remote repositories when needed, making the system more robust and flexible."
                }
            ]
        },
        {
            id: "github-platforms",
            title: "GitHub & Git Hosting Platforms",
            content: `
                <h3>What is GitHub?</h3>
                <p>GitHub is a cloud-based platform for hosting Git repositories with powerful collaboration features.</p>
                
                <h3>GitHub Features:</h3>
                <ul>
                    <li><strong>Repository Hosting</strong>: Store your Git repositories in the cloud</li>
                    <li><strong>Pull Requests</strong>: Code review and collaboration workflow</li>
                    <li><strong>Issue Tracking</strong>: Bug reports and feature requests</li>
                    <li><strong>Project Management</strong>: Kanban boards and project organization</li>
                    <li><strong>CI/CD Integration</strong>: Automated testing and deployment</li>
                </ul>
                
                <h3>Alternative Platforms:</h3>
                <ul>
                    <li><strong>GitLab</strong>: Self-hosted alternative with built-in CI/CD</li>
                    <li><strong>Bitbucket</strong>: Good for small teams with free private repos</li>
                    <li><strong>Azure DevOps</strong>: Microsoft's enterprise solution</li>
                    <li><strong>SourceForge</strong>: Older platform for open source projects</li>
                </ul>
                
                <h3>Key Differences:</h3>
                <ul>
                    <li><strong>Git</strong>: The version control tool itself</li>
                    <li><strong>GitHub</strong>: A service that hosts Git repositories</li>
                    <li><strong>Standalone Usage</strong>: You can use Git without any hosting service</li>
                    <li><strong>Enhanced Collaboration</strong>: GitHub adds team features to Git</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>ما هو GitHub؟</h3>
                    <p>GitHub هو منصة مستندة إلى السحابة لاستضافة مستودعات Git مع ميزات تعاون قوية.</p>
                    
                    <h3>ميزات GitHub:</h3>
                    <ul>
                        <li><strong>استضافة المستودعات</strong>: خزن مستودعات Git الخاصة بك في السحابة</li>
                        <li><strong>طلبات السحب</strong>: مراجعة الكود وسير عمل التعاون</li>
                        <li><strong>تتبع المشكلات</strong>: تقارير الأخطاء وطلبات الميزات</li>
                        <li><strong>إدارة المشاريع</strong>: لوحات Kanban وتنظيم المشاريع</li>
                        <li><strong>تكامل CI/CD</strong>: الاختبار الآلي والنشر</li>
                    </ul>
                    
                    <h3>المنصات البديلة:</h3>
                    <ul>
                        <li><strong>GitLab</strong>: بديل ذاتي الاستضافة مع CI/CD مدمج</li>
                        <li><strong>Bitbucket</strong>: جيد للفرق الصغيرة مع مستودعات خاصة مجانية</li>
                        <li><strong>Azure DevOps</strong>: حل Microsoft للمؤسسات</li>
                        <li><strong>SourceForge</strong>: منصة أقدم للمشاريع مفتوحة المصدر</li>
                    </ul>
                    
                    <h3>الاختلافات الرئيسية:</h3>
                    <ul>
                        <li><strong>Git</strong>: أداة التحكم في النسخ نفسها</li>
                        <li><strong>GitHub</strong>: خدمة تستضيف مستودعات Git</li>
                        <li><strong>الاستخدام المنفرد</strong>: يمكنك استخدام Git بدون أي خدمة استضافة</li>
                        <li><strong>التعاون المعزز</strong>: يضيف GitHub ميزات الفريق إلى Git</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "GitHub Workflow Examples",
                    content: `
                        <pre class="code-block">
# Clone a repository from GitHub
git clone https://github.com/username/repository-name.git

# Add remote repository
git remote add origin https://github.com/username/repo.git

# Push to GitHub
git push -u origin main

# Pull latest changes
git pull origin main

# Fork a repository (on GitHub website)
# 1. Click "Fork" button on GitHub
# 2. Clone your forked version
git clone https://github.com/your-username/repo-name.git

# Create pull request (on GitHub)
# 1. Make changes and push to your fork
# 2. Click "Pull Request" on GitHub
# 3. Select base repository and your branch

# Working with issues
# Create, assign, and close issues through GitHub interface
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "GitHub Platform Practice",
                    content: `
                        <p>Practice using GitHub and Git hosting platforms:</p>
                        <ol>
                            <li>Create a GitHub account and set up your profile</li>
                            <li>Create a new repository and push your local project</li>
                            <li>Practice forking repositories and creating pull requests</li>
                            <li>Create and manage issues in your repositories</li>
                            <li>Set up a README.md file with proper documentation</li>
                            <li>Explore GitHub Projects for task management</li>
                            <li>Try creating a GitHub Pages site from your repository</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When should I use a fork vs. a branch?",
                    answer: "Use a fork when you want to contribute to someone else's project and don't have write access to their repository. Fork creates a copy under your account. Use a branch when you have write access to the repository and want to work on a new feature or fix within the same project. Branches are for collaboration within the same repository, while forks are for cross-repository collaboration."
                },
                {
                    question: "What are the benefits of using pull requests?",
                    answer: "Pull requests enable code review, discussion, and quality control before changes are merged. They provide a formal process for proposing changes, allow multiple reviewers to comment on specific lines of code, run automated tests, and ensure that changes meet project standards before being integrated into the main codebase."
                }
            ]
        },
        {
            id: "terminal-cli",
            title: "Terminal & Command Line Essentials",
            content: `
                <h3>Understanding Your Development Environment</h3>
                <p>The terminal and command line are essential tools for developers to interact with their computer and development tools.</p>
                
                <h3>Key Concepts:</h3>
                <ul>
                    <li><strong>Terminal</strong>: The window where we type commands</li>
                    <li><strong>Shell</strong>: The program that runs inside the terminal and executes commands</li>
                    <li><strong>CLI vs GUI</strong>: Command Line Interface vs Graphical User Interface</li>
                    <li><strong>Flags</strong>: Options that start with - or -- to modify command behavior</li>
                    <li><strong>Arguments</strong>: Additional information provided to commands</li>
                    <li><strong>Paths</strong>: Absolute (full path from root) vs Relative (from current directory)</li>
                </ul>
                
                <h3>Common Terminal Setups:</h3>
                <table class="command-table">
                    <thead>
                        <tr>
                            <th>System</th>
                            <th>Terminal</th>
                            <th>Shell</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Windows 11</td>
                            <td>Windows Terminal</td>
                            <td>PowerShell</td>
                        </tr>
                        <tr>
                            <td>Mac/Linux</td>
                            <td>Terminal</td>
                            <td>ZSH/BASH</td>
                        </tr>
                        <tr>
                            <td>Git Bash</td>
                            <td>MinTTY</td>
                            <td>BASH</td>
                        </tr>
                        <tr>
                            <td>WSL</td>
                            <td>Windows Terminal</td>
                            <td>BASH</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Essential Commands:</h3>
                <table class="command-table">
                    <thead>
                        <tr>
                            <th>Command</th>
                            <th>Meaning</th>
                            <th>Examples & Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>pwd</td>
                            <td>Print working directory</td>
                            <td>Shows current full path</td>
                        </tr>
                        <tr>
                            <td>ls</td>
                            <td>List directory contents</td>
                            <td>ls -a (show hidden), ls -l (detailed)</td>
                        </tr>
                        <tr>
                            <td>cd [path]</td>
                            <td>Change directory</td>
                            <td>cd .. (up), cd ~ (home), cd / (root)</td>
                        </tr>
                        <tr>
                            <td>mkdir</td>
                            <td>Create directory</td>
                            <td>mkdir project-folder</td>
                        </tr>
                        <tr>
                            <td>touch</td>
                            <td>Create file</td>
                            <td>touch index.html</td>
                        </tr>
                        <tr>
                            <td>cp</td>
                            <td>Copy files/dirs</td>
                            <td>cp file1 file2, cp -r dir1 dir2</td>
                        </tr>
                        <tr>
                            <td>mv</td>
                            <td>Move/rename</td>
                            <td>mv old.txt new.txt</td>
                        </tr>
                        <tr>
                            <td>rm</td>
                            <td>Remove files</td>
                            <td>rm file.txt, rm -r folder/</td>
                        </tr>
                        <tr>
                            <td>cat</td>
                            <td>View file content</td>
                            <td>cat README.md</td>
                        </tr>
                        <tr>
                            <td>echo</td>
                            <td>Print text</td>
                            <td>echo 'Hello' > file.txt</td>
                        </tr>
                        <tr>
                            <td>grep</td>
                            <td>Search text</td>
                            <td>grep 'error' log.txt</td>
                        </tr>
                        <tr>
                            <td>find</td>
                            <td>Find files</td>
                            <td>find . -name '*.js'</td>
                        </tr>
                        <tr>
                            <td>clear</td>
                            <td>Clear terminal</td>
                            <td>Clears screen, history remains</td>
                        </tr>
                    </tbody>
                </table>

                <br><hr><br>
                <div dir="rtl">
                    <h3>فهم بيئة التطوير الخاصة بك</h3>
                    <p>الطرفية وسطر الأوامر هما أداتان أساسيتان للمطورين للتفاعل مع الكمبيوتر وأدوات التطوير.</p>
                    
                    <h3>المفاهيم الرئيسية:</h3>
                    <ul>
                        <li><strong>الطرفية (Terminal)</strong>: النافذة التي نكتب فيها الأوامر</li>
                        <li><strong>الصدفة (Shell)</strong>: البرنامج الذي يعمل داخل الطرفية وينفذ الأوامر</li>
                        <li><strong>CLI مقابل GUI</strong>: واجهة سطر الأوامر مقابل الواجهة الرسومية</li>
                        <li><strong>العلامات (Flags)</strong>: خيارات تبدأ بـ - أو -- لتعديل سلوك الأمر</li>
                        <li><strong>المعطيات (Arguments)</strong>: معلومات إضافية مقدمة للأوامر</li>
                        <li><strong>المسارات (Paths)</strong>: مطلق (مسار كامل من الجذر) مقابل نسبي (من الدليل الحالي)</li>
                    </ul>
                    
                    <h3>إعدادات الطرفية الشائعة:</h3>
                    <table class="command-table">
                        <thead>
                            <tr>
                                <th>النظام</th>
                                <th>الطرفية</th>
                                <th>الصدفة</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Windows 11</td>
                                <td>Windows Terminal</td>
                                <td>PowerShell</td>
                            </tr>
                            <tr>
                                <td>Mac/Linux</td>
                                <td>Terminal</td>
                                <td>ZSH/BASH</td>
                            </tr>
                            <tr>
                                <td>Git Bash</td>
                                <td>MinTTY</td>
                                <td>BASH</td>
                            </tr>
                            <tr>
                                <td>WSL</td>
                                <td>Windows Terminal</td>
                                <td>BASH</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            examples: [
                {
                    title: "Command Line Examples",
                    content: `
                        <pre class="code-block">
# Navigation examples
pwd                          # /c/Users/YourName/Projects
ls -la                       # List all files including hidden
cd Documents                 # Change to Documents directory
cd ..                        # Go up one directory
cd ~                         # Go to home directory

# File operations
mkdir my-project             # Create new directory
touch index.html style.css   # Create multiple files
cp file1.txt file2.txt       # Copy file1 to file2
mv old-name.txt new-name.txt # Rename file
rm unwanted-file.txt         # Remove file

# File content operations
cat README.md                # Display file content
echo "# My Project" > README.md  # Create file with content
echo "New line" >> README.md     # Append to file

# Search and filter
grep "TODO" src/*.js         # Find TODO in JavaScript files
find . -name "*.html"        # Find all HTML files
ls -la | grep "May"          # List files created in May

# Combining commands
mkdir new-project && cd new-project  # Create and enter directory
cat file.txt | wc -l         # Count lines in file

# Windows specific (PowerShell)
Get-Location                 # Like pwd
Get-ChildItem                # Like ls
New-Item -ItemType Directory -Name "new-folder"
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Command Line Practice",
                    content: `
                        <p>Practice these command line exercises:</p>
                        <ol>
                            <li>Navigate through different directories using cd command</li>
                            <li>Create a project structure with multiple folders and files</li>
                            <li>Practice copying, moving, and renaming files</li>
                            <li>Use grep to search for specific text in files</li>
                            <li>Create and modify files using echo and cat</li>
                            <li>Practice using different flags with common commands</li>
                            <li>Set up command aliases for frequently used commands</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between absolute and relative paths?",
                    answer: "Absolute paths start from the root directory and provide the complete path (e.g., /home/user/projects/index.html). Relative paths start from the current working directory (e.g., ./images/photo.jpg or ../documents/file.txt). Absolute paths are unambiguous but longer, while relative paths are shorter but depend on the current directory. Use ../ to go up one directory and ./ for the current directory."
                },
                {
                    question: "Why do developers prefer CLI over GUI for many tasks?",
                    answer: "CLI is often faster for repetitive tasks, can be automated with scripts, uses fewer system resources, allows precise control, works well over remote connections, and enables piping and combining commands. While GUI is more intuitive for beginners, CLI provides power users with efficiency, automation capabilities, and better integration into development workflows."
                }
            ]
        },
        {
            id: "git-setup-config",
            title: "Git Setup & Configuration",
            content: `
                <h3>Getting Started with Git</h3>
                <p>Proper setup and configuration are essential for an efficient Git workflow.</p>
                
                <h3>Installation Steps:</h3>
                <ul>
                    <li><strong>Create GitHub Account</strong>: Sign up at github.com</li>
                    <li><strong>Install Git</strong>:
                        <ul>
                            <li>Windows: Download from git-scm.com/downloads</li>
                            <li>macOS: Use Homebrew (brew.sh) or download from git-scm.com</li>
                            <li>Linux: Use package manager (sudo apt-get install git)</li>
                        </ul>
                    </li>
                </ul>
                
                <h3>Verification Commands:</h3>
                <pre class="code-block">
git --version              # Check Git installation
git config --global --list # View current configuration
                </pre>
                
                <h3>Essential Configuration:</h3>
                <pre class="code-block">
# Set user information (required for commits)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default branch name
git config --global init.defaultBranch main

# Set default editor (VS Code example)
git config --global core.editor "code --wait"

# Set line ending handling (Windows)
git config --global core.autocrlf true

# Set line ending handling (macOS/Linux)
git config --global core.autocrlf input

# Create command aliases for efficiency
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# Enable colorful output
git config --global color.ui auto
                </pre>
                
                <h3>Common Configurations:</h3>
                <ul>
                    <li><strong>core.autocrlf</strong>: Handle line endings appropriately for your OS</li>
                    <li><strong>merge.tool</strong>: Configure default merge tool for conflict resolution</li>
                    <li><strong>alias</strong>: Create shortcuts for frequently used commands</li>
                    <li><strong>push.default</strong>: Set default push behavior</li>
                    <li><strong>pull.rebase</strong>: Configure pull to use rebase instead of merge</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>بدء الاستخدام مع Git</h3>
                    <p>الإعداد والتكوين المناسبان ضروريان لسير عمل Git فعال.</p>
                    
                    <h3>خطوات التثبيت:</h3>
                    <ul>
                        <li><strong>إنشاء حساب GitHub</strong>: سجل في github.com</li>
                        <li><strong>تثبيت Git</strong>:
                            <ul>
                                <li>Windows: حمّل من git-scm.com/downloads</li>
                                <li>macOS: استخدم Homebrew (brew.sh) أو حمّل من git-scm.com</li>
                                <li>Linux: استخدم مدير الحزم (sudo apt-get install git)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Git Configuration Examples",
                    content: `
                        <pre class="code-block">
# View all configuration (global and local)
git config --list

# View specific configuration level
git config --global --list    # Global (user-wide) settings
git config --local --list     # Repository-specific settings
git config --system --list    # System-wide settings

# Set configuration for specific repository only
git config user.name "Project Specific Name"
git config user.email "project@example.com"

# Useful aliases for daily work
git config --global alias.lg "log --oneline --graph --decorate --all"
git config --global alias.last "log -1 HEAD"
git config --global alias.unstage "reset HEAD --"
git config --global alias.undo "reset --soft HEAD~1"

# Configure merge tool (example for VSCode)
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd "code --wait $MERGED"

# Configure diff tool
git config --global diff.tool vscode
git config --global difftool.vscode.cmd "code --wait --diff $LOCAL $REMOTE"

# Set default behavior
git config --global push.default simple
git config --global pull.rebase false

# Configure credential helper (saves login info)
git config --global credential.helper store

# Verify your configuration
git config --global --list | grep -E "(user|alias|core)"
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Git Setup Practice",
                    content: `
                        <p>Practice setting up and configuring Git:</p>
                        <ol>
                            <li>Install Git on your system and verify the installation</li>
                            <li>Configure your global user name and email address</li>
                            <li>Set up your preferred text editor for commit messages</li>
                            <li>Create useful command aliases for your workflow</li>
                            <li>Configure line ending handling for your operating system</li>
                            <li>Set up credential helper to remember your passwords</li>
                            <li>Create both global and repository-specific configurations</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between global, local, and system Git configuration?",
                    answer: "Global configuration (~/.gitconfig) applies to all repositories for the current user. Local configuration (.git/config) applies only to the specific repository and overrides global settings. System configuration (/etc/gitconfig) applies to all users on the system and is overridden by both global and local settings. Use global for personal preferences, local for project-specific settings, and system for organization-wide defaults."
                },
                {
                    question: "Why is it important to set user.name and user.email in Git?",
                    answer: "Git uses the user.name and user.email to identify who made each commit. This information is permanently stored in the commit history and is essential for collaboration, accountability, and tracking changes. Without proper configuration, commits may show up as anonymous or with incorrect information, making it difficult to identify who made specific changes or to contact contributors."
                }
            ]
        },
        {
    id: "git-workflow-areas",
    title: "Git Workflow & Areas - Understanding Git's Architecture",
    content: `
        <h3>Understanding Git's Architecture</h3>
        <p>Git organizes your work into four main areas that represent different stages of the version control process.</p>
        
        <h3>Four Main Areas:</h3>
        <ul>
            <li><strong>Working Directory</strong>: Your actual project files where you make changes</li>
            <li><strong>Staging Area (Index)</strong>: Prepares changes for commit with selective inclusion</li>
            <li><strong>Local Repository</strong>: Complete project history with all commits and branches</li>
            <li><strong>Remote Repository</strong>: Shared repository for collaboration and backup</li>
        </ul>
        
        <h3>Working Directory:</h3>
        <ul>
            <li><strong>Your actual project files</strong>: All the files you see in your project folder</li>
            <li><strong>Where you make changes</strong>: Edit, create, and delete files here</li>
            <li><strong>Untracked by Git initially</strong>: New files aren't tracked until you add them</li>
            <li><strong>Modified files</strong>: Changes that haven't been staged yet</li>
        </ul>
        
        <h3>Staging Area (Index):</h3>
        <ul>
            <li><strong>Prepares changes for commit</strong>: Select which changes to include in next commit</li>
            <li><strong>Selective inclusion of changes</strong>: Choose specific files or even specific parts of files</li>
            <li><strong>Intermediate between working directory and repository</strong>: Holding area for changes</li>
            <li><strong>Review before committing</strong>: See exactly what will be committed</li>
        </ul>
        
        <h3>Local Repository:</h3>
        <ul>
            <li><strong>Complete project history</strong>: Every commit ever made in this project</li>
            <li><strong>All commits and branches</strong>: Full version control metadata</li>
            <li><strong>Stores metadata in .git folder</strong>: Hidden folder containing all repository data</li>
            <li><strong>Fast local operations</strong>: All history operations happen locally</li>
        </ul>
        
        <h3>Remote Repository:</h3>
        <ul>
            <li><strong>Shared repository (GitHub, etc.)</strong>: Central location for team collaboration</li>
            <li><strong>Collaboration point for teams</strong>: Where team members share their work</li>
            <li><strong>Backup and distribution center</strong>: Safeguard against local data loss</li>
            <li><strong>Source of truth</strong>: Official project version</li>
        </ul>
        
        <h3>Typical Workflow:</h3>
        <ol>
            <li><strong>Modify files in Working Directory</strong>: Make changes to your project files</li>
            <li><strong>Stage changes with git add</strong>: Select changes to include in next commit</li>
            <li><strong>Commit changes with git commit</strong>: Save changes to local repository with a message</li>
            <li><strong>Push changes with git push</strong>: Share commits with remote repository</li>
        </ol>

        <br><hr><br>
        <div dir="rtl">
            <h3>فهم بنية Git</h3>
            <p>ينظم Git عملك في أربع مناطق رئيسية تمثل مراحل مختلفة من عملية التحكم في النسخ.</p>
            
            <h3>المناطق الأربع الرئيسية:</h3>
            <ul>
                <li><strong>دليل العمل</strong>: ملفات مشروعك الفعلية حيث تجري التغييرات</li>
                <li><strong>منطقة التجهيز</strong>: تعد التغييرات للإيداع مع الإدراج الانتقائي</li>
                <li><strong>المستودع المحلي</strong>: تاريخ المشروع الكامل مع جميع الإيداعات والفروع</li>
                <li><strong>المستودع البعيد</strong>: مستودع مشترك للتعاون والنسخ الاحتياطي</li>
            </ul>
            
            <h3>دليل العمل:</h3>
            <ul>
                <li><strong>ملفات مشروعك الفعلية</strong>: جميع الملفات التي تراها في مجلد مشروعك</li>
                <li><strong>حيث تجري التغييرات</strong>: عدل وأنشئ واحذف الملفات هنا</li>
                <li><strong>غير متعقب من قبل Git في البداية</strong>: الملفات الجديدة لا يتم تتبعها حتى تضيفها</li>
                <li><strong>الملفات المعدلة</strong>: التغييرات التي لم يتم تجهيزها بعد</li>
            </ul>
            
            <h3>منطقة التجهيز:</h3>
            <ul>
                <li><strong>تجهيز التغييرات للإيداع</strong>: اختر التغييرات المطلوب تضمينها في الإيداع التالي</li>
                <li><strong>الإدراج الانتقائي للتغييرات</strong>: اختر ملفات محددة أو حتى أجزاء محددة من الملفات</li>
                <li><strong>وسيط بين دليل العمل والمستودع</strong>: منطقة انتظار للتغييرات</li>
                <li><strong>مراجعة قبل الإيداع</strong>: انظر بالضبط ما سيتم إيداعه</li>
            </ul>
            
            <h3>المستودع المحلي:</h3>
            <ul>
                <li><strong>تاريخ المشروع الكامل</strong>: كل إيداع تم إجراؤه في هذا المشروع</li>
                <li><strong>جميع الإيداعات والفروع</strong>: بيانات التحكم في النسخ الكاملة</li>
                <li><strong>يخزن البيانات الوصفية في مجلد .git</strong>: المجلد المخفي الذي يحتوي على جميع بيانات المستودع</li>
                <li><strong>عمليات محلية سريعة</strong>: جميع عمليات التاريخ تحدث محليًا</li>
            </ul>
            
            <h3>المستودع البعيد:</h3>
            <ul>
                <li><strong>مستودع مشترك (GitHub، إلخ)</strong>: موقع مركزي للتعاون بين الفرق</li>
                <li><strong>نقطة التعاون للفرق</strong>: حيث يشارك أعضاء الفريق عملهم</li>
                <li><strong>مركز النسخ الاحتياطي والتوزيع</strong>: الحماية ضد فقدان البيانات المحلي</li>
                <li><strong>مصدر الحقيقة</strong>: النسخة الرسمية للمشروع</li>
            </ul>
            
            <h3>سير العمل النموذجي:</h3>
            <ol>
                <li><strong>تعديل الملفات في دليل العمل</strong>: إجراء تغييرات على ملفات مشروعك</li>
                <li><strong>تجهيز التغييرات باستخدام git add</strong>: اختر التغييرات المطلوب تضمينها في الإيداع التالي</li>
                <li><strong>إيداع التغييرات باستخدام git commit</strong>: احفظ التغييرات في المستودع المحلي مع رسالة</li>
                <li><strong>دفع التغييرات باستخدام git push</strong>: شارك الإيداعات مع المستودع البعيد</li>
            </ol>
        </div>
    `,
    examples: [
        {
            title: "Git Workflow Examples",
            content: `
                <pre class="code-block">
# Example 1: Complete workflow from start to finish

# Initialize new repository
mkdir my-project
cd my-project
git init

# Create and modify files in Working Directory
echo "# My Project" > README.md
touch index.html style.css

# Check status (shows untracked files in Working Directory)
git status
# Output: Untracked files: README.md, index.html, style.css

# Stage files (move from Working Directory to Staging Area)
git add README.md
git add index.html style.css
# Or stage all files: git add .

# Check status again (shows files ready to commit)
git status
# Output: Changes to be committed: new file: README.md, etc.

# Commit changes (move from Staging Area to Local Repository)
git commit -m "Initial project setup with basic files"

# Add remote repository (connect to Remote Repository)
git remote add origin https://github.com/username/my-project.git

# Push changes (send from Local Repository to Remote Repository)
git push -u origin main

# Example 2: Making changes to existing project

# Modify files in Working Directory
echo "New feature" >> feature.txt
edit index.html  # Make some changes

# Check what changed (Working Directory vs Local Repository)
git diff

# Stage specific changes (selective staging)
git add feature.txt
git add index.html

# Check staged changes (Staging Area vs Local Repository)
git diff --staged

# Commit the staged changes
git commit -m "Add new feature and update homepage"

# Push to remote
git push origin main

# Example 3: Working with multiple areas simultaneously

# File states across different areas:
# - file1.txt: Modified in Working Directory, not staged
# - file2.txt: Modified in Working Directory and staged
# - file3.txt: Committed in Local Repository, not modified
# - file4.txt: New file in Working Directory, not tracked

git status
# Shows different states clearly

# Stage only some changes from a file
git add -p  # Interactive staging

# Unstage a file (move from Staging Area back to Working Directory)
git reset HEAD file2.txt

# Discard changes in Working Directory (revert to last commit)
git checkout -- file1.txt

# Example 4: Checking differences between areas

# Working Directory vs Staging Area
git diff

# Staging Area vs Local Repository (last commit)
git diff --staged

# Working Directory vs Local Repository (both unstaged and staged)
git diff HEAD

# Between Local Repository and Remote Repository
git fetch
git diff main origin/main
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Git Workflow Practice",
            content: `
                <p>Practice understanding and using Git's different areas:</p>
                <ol>
                    <li>Create a new repository and practice moving files through all four areas</li>
                    <li>Intentionally make changes and use git status to see file states</li>
                    <li>Practice selective staging using git add with specific files</li>
                    <li>Use git diff to see differences between different areas</li>
                    <li>Practice moving changes between stages (add, reset, checkout)</li>
                    <li>Create a visual diagram of Git's four areas and the commands that move between them</li>
                    <li>Practice the complete workflow: modify → stage → commit → push</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the purpose of the staging area and why is it useful?",
            answer: "The staging area allows you to selectively choose which changes to include in your next commit. This is useful for: grouping related changes together, breaking large changes into logical commits, reviewing changes before committing, and avoiding committing temporary or debug code. It gives you fine-grained control over what gets recorded in your project history."
        },
        {
            question: "What's the difference between git reset, git checkout, and git revert?",
            answer: "git reset moves changes from the staging area back to the working directory (--mixed) or discards them completely (--hard). git checkout discards changes in the working directory by restoring files from the staging area or repository. git revert creates a new commit that undoes the changes from a previous commit. Use reset to unstage changes, checkout to discard uncommitted changes, and revert to safely undo committed changes in shared repositories."
        }
    ]
},
        {
            id: "git-commands-workflow",
            title: "Essential Git Commands & Daily Workflow",
            content: `
                <h3>Daily Git Command Toolkit</h3>
                <p>Master the essential Git commands that you'll use every day in your development workflow.</p>
                
                <h3>Repository Operations:</h3>
                <pre class="code-block">
git init                    # Initialize new repository
git clone [url]            # Clone existing repository
git status                 # Check repository status
git remote -v              # Show remote repositories
                </pre>
                
                <h3>Basic Workflow Commands:</h3>
                <pre class="code-block">
git add [files]            # Stage specific files
git add .                  # Stage all changes
git add -A                 # Stage all changes (including deletions)
git add -p                 # Stage changes interactively

git reset [files]          # Unstage specific files
git reset                  # Unstage all files

git commit -m "message"    # Commit with message
git commit -am "message"   # Add and commit in one step (tracked files only)

git push origin main       # Push to remote repository
git pull origin main       # Pull latest changes from remote
git fetch                  # Download remote updates without merging
                </pre>
                
                <h3>History & Inspection Commands:</h3>
                <pre class="code-block">
git log                    # Show commit history
git log --oneline          # Compact history view
git log --graph --oneline --decorate --all  # Visual history
git show [commit]          # Show commit details and changes
git diff                   # Show unstaged changes
git diff --staged          # Show staged changes
git blame [file]           # Show who changed each line
git shortlog               # Show commit summary by author
                </pre>
                
                <h3>Daily Workflow Pattern:</h3>
                <ol>
                    <li><code>git status</code> - Check what's changed</li>
                    <li><code>git add .</code> - Stage your changes</li>
                    <li><code>git commit -m "description"</code> - Commit changes</li>
                    <li><code>git pull origin main</code> - Get latest changes</li>
                    <li><code>git push origin main</code> - Share your changes</li>
                </ol>

                <br><hr><br>
                <div dir="rtl">
                    <h3>أدوات أوامر Git اليومية</h3>
                    <p>أتقن أوامر Git الأساسية التي ستستخدمها كل يوم في سير عمل التطوير الخاص بك.</p>
                    
                    <h3>نمط سير العمل اليومي:</h3>
                    <ol>
                        <li><code>git status</code> - تحقق مما تغير</li>
                        <li><code>git add .</code> - أضف تغييراتك للمرحلة</li>
                        <li><code>git commit -m "description"</code> - احفظ التغييرات</li>
                        <li><code>git pull origin main</code> - احصل على أحدث التغييرات</li>
                        <li><code>git push origin main</code> - شارك تغييراتك</li>
                    </ol>
                </div>
            `,
            examples: [
                {
                    title: "Complete Workflow Example",
                    content: `
                        <pre class="code-block">
# Start a new project
mkdir my-project
cd my-project
git init
git status

# Create initial files
touch index.html style.js README.md
git add .
git commit -m "Initial project structure"

# Connect to GitHub and push
git remote add origin https://github.com/username/my-project.git
git push -u origin main

# Daily work example
# Make changes to files...
echo "&lt;h1&gt;Hello World&lt;/h1&gt;" > index.html

# Check what changed
git status
git diff

# Stage and commit changes
git add index.html
git commit -m "Add basic HTML structure"

# Get latest changes from team
git pull origin main

# Push your work
git push origin main

# View history
git log --oneline --graph

# Working with specific files
git add index.html style.js    # Stage specific files
git reset style.js             # Unstage one file
git commit -m "Update HTML structure"

# Interactive staging (choose parts to stage)
git add -p

# Amend last commit (if you forgot something)
git add forgotten-file.js
git commit --amend -m "Complete initial structure"

# Force push after amend (use carefully)
git push --force-with-lease origin main
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Git Commands Practice",
                    content: `
                        <p>Practice these essential Git commands:</p>
                        <ol>
                            <li>Initialize a new repository and make multiple commits</li>
                            <li>Practice using git status and git diff frequently</li>
                            <li>Use different git log formats to view history</li>
                            <li>Stage files selectively using git add with specific paths</li>
                            <li>Practice pulling and pushing to a remote repository</li>
                            <li>Use git show to examine specific commits</li>
                            <li>Experiment with amending commits and force pushing</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between git pull and git fetch?",
                    answer: "git fetch downloads the latest changes from the remote repository but doesn't merge them into your working directory. It updates your remote tracking branches. git pull does a git fetch followed by git merge, automatically integrating the remote changes into your current branch. Use git fetch when you want to review changes before merging, and git pull when you're ready to immediately incorporate updates."
                },
                {
                    question: "When should I use git commit --amend?",
                    answer: "Use git commit --amend to modify the most recent commit. This is useful for: adding forgotten files to the last commit, correcting commit messages, or making small changes to the last commit without creating a new commit. However, avoid amending commits that have already been pushed to a shared repository, as it rewrites history and can cause conflicts for other developers."
                }
            ]
        },
        {
    id: "serverless-deployment",
    title: "Serverless Deployment - Deploy Frontend Projects to Production",
    content: `
        <h3>What is Serverless Deployment?</h3>
        <p>Serverless deployment allows you to host your frontend applications without managing servers, with platforms automatically handling scaling, SSL, and global distribution.</p>
        
        <h3>Popular Deployment Platforms:</h3>
        <ul>
            <li><strong>Render</strong>: Free tier with automatic deployments from GitHub</li>
            <li><strong>Vercel</strong>: Optimized for Next.js with excellent performance</li>
            <li><strong>Netlify</strong>: Feature-rich with forms, functions, and split testing</li>
            <li><strong>GitHub Pages</strong>: Free hosting for static sites directly from GitHub</li>
            <li><strong>Surge.sh</strong>: Simple command-line deployment for static sites</li>
        </ul>
        
        <h3>Why Use Render (Free Tier):</h3>
        <ul>
            <li><strong>Free Static Site Hosting</strong>: Unlimited free static sites</li>
            <li><strong>Automatic Deployments</strong>: Deploys on every git push</li>
            <li><strong>Custom Domains</strong>: Free custom domain support</li>
            <li><strong>SSL Certificates</strong>: Automatic HTTPS</li>
            <li><strong>Global CDN</strong>: Fast loading worldwide</li>
            <li><strong>No Credit Card Required</strong>: Completely free to start</li>
        </ul>
        
        <h3>What Can You Deploy:</h3>
        <ul>
            <li><strong>Vanilla JavaScript</strong>: HTML, CSS, JavaScript projects</li>
            <li><strong>React Applications</strong>: Create React App, Vite, Next.js</li>
            <li><strong>Vue.js Applications</strong>: Vue CLI, Nuxt.js</li>
            <li><strong>Static Sites</strong>: Any static file collection</li>
            <li><strong>Single Page Applications (SPA)</strong>: With client-side routing</li>
        </ul>
        
        <h3>Deployment Process Overview:</h3>
        <ol>
            <li>Prepare your project for production</li>
            <li>Connect GitHub repository to deployment platform</li>
            <li>Configure build settings and environment variables</li>
            <li>Deploy automatically on git push</li>
            <li>Set up custom domain (optional)</li>
        </ol>

        <br><hr><br>
        <div dir="rtl">
            <h3>ما هو النشر الخادمless؟</h3>
            <p>يسمح لك النشر الخادمless باستضافة تطبيقات الواجهة الأمامية دون إدارة الخوادم، حيث تتعامل المنصات تلقائيًا مع التوسع وشهادات SSL والتوزيع العالمي.</p>
            
            <h3>منصات النشر الشائعة:</h3>
            <ul>
                <li><strong>Render</strong>: مستوى مجاني مع نشر تلقائي من GitHub</li>
                <li><strong>Vercel</strong>: مُحسَّن لـ Next.js بأداء ممتاز</li>
                <li><strong>Netlify</strong>: غني بالميزات مع نماذج ودوال واختبار تقسيم</li>
                <li><strong>GitHub Pages</strong>: استضافة مجانية للمواقع الثابتة مباشرة من GitHub</li>
                <li><strong>Surge.sh</strong>: نشر بسيط عبر سطر الأوامر للمواقع الثابتة</li>
            </ul>
            
            <h3>لماذا نستخدم Render (المستوى المجاني):</h3>
            <ul>
                <li><strong>استضافة مواقع ثابتة مجانية</strong>: مواقع ثابتة مجانية غير محدودة</li>
                <li><strong>النشر التلقائي</strong>: ينشر عند كل دفع git</li>
                <li><strong>النطاقات المخصصة</strong>: دعم مجاني للنطاقات المخصصة</li>
                <li><strong>شهادات SSL</strong>: HTTPS تلقائي</li>
                <li><strong>شبكة CDN عالمية</strong>: تحميل سريع worldwide</li>
                <li><strong>لا حاجة لبطاقة ائتمان</strong>: مجاني تمامًا للبدء</li>
            </ul>
            
            <h3>ما يمكنك نشره:</h3>
            <ul>
                <li><strong>JavaScript عادي</strong>: مشاريع HTML, CSS, JavaScript</li>
                <li><strong>تطبيقات React</strong>: Create React App, Vite, Next.js</li>
                <li><strong>تطبيقات Vue.js</strong>: Vue CLI, Nuxt.js</li>
                <li><strong>المواقع الثابتة</strong>: أي مجموعة ملفات ثابتة</li>
                <li><strong>تطبيقات الصفحة الواحدة</strong>: مع التوجيه من جانب العميل</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Deploying to Render - Step by Step Guide",
            content: `
                <pre class="code-block">
# Example 1: Deploying a Vanilla JavaScript Project to Render

## Step 1: Prepare Your Project Structure
/*
Your project should have this structure:
my-project/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── images/
└── README.md
*/

## Step 2: Create a GitHub Repository
# Initialize git and push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/my-project.git
git push -u origin main

## Step 3: Deploy on Render
1. Go to render.com and sign up with GitHub
2. Click "New +" and select "Static Site"
3. Connect your GitHub repository
4. Configure deployment settings:
   - Name: my-project
   - Branch: main
   - Build Command: (leave empty for static sites)
   - Publish Directory: . (current directory)
5. Click "Create Static Site"

## Step 4: Automatic Deployments
# Every time you push to GitHub, Render automatically deploys:
git add .
git commit -m "Update styling"
git push origin main

## Example 2: Deploying a React App to Render

# Create React App example
npx create-react-app my-react-app
cd my-react-app

# Build the project for production
npm run build

# The build folder contains optimized production files

# Push to GitHub
git add .
git commit -m "Initial React app"
git push origin main

# On Render configuration:
# - Build Command: npm run build
# - Publish Directory: build

## Example 3: Environment Variables on Render

# For React apps needing environment variables:
# Create .env.production in your project
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your-api-key

# On Render, add environment variables in dashboard:
# - Key: REACT_APP_API_URL
# - Value: https://api.example.com

## Example 4: Custom Domain Setup

1. In Render dashboard, go to your static site
2. Click "Settings" then "Custom Domains"
3. Add your domain (e.g., www.myapp.com)
4. Update DNS records at your domain provider:
   - Type: CNAME
   - Name: www
   - Value: your-site.onrender.com

## Example 5: Deployment Configuration Files

# For advanced configuration, create render.yaml
services:
  - type: web
    name: my-react-app
    env: static
    buildCommand: npm run build
    publishDir: build
    envVars:
      - key: REACT_APP_VERSION
        value: 1.0.0

## Example 6: Redirects for Single Page Applications

# Create _redirects file in public folder for SPAs:
/*    /index.html   200

# Or use render.yaml for redirects:
routes:
  - type: rewrite
    source: /*
    destination: /index.html
                </pre>
            `
        },
        {
            title: "Platform Comparison & Configuration Examples",
            content: `
                <pre class="code-block">
# Example 1: Vercel Deployment (for Next.js)

## Using Vercel CLI
npm i -g vercel
vercel

## Or connect GitHub repo on vercel.com

# vercel.json configuration
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}

# Example 2: Netlify Deployment

## netlify.toml configuration
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

## Netlify specific environment variables
# Create netlify.toml or set in dashboard
[build.environment]
  NODE_VERSION = "18"

# Example 3: GitHub Pages Deployment

## For simple static sites
# Push to GitHub, then in repository settings:
# - Go to Pages
# - Select source branch (usually main)
# - Select folder (usually /root)

## Using GitHub Actions for build
# Create .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build

# Example 4: Environment-Specific Builds

## Using different environment variables
# .env.development
API_URL=http://localhost:3000

# .env.production
API_URL=https://api.myapp.com

## In your build process, use the correct environment
# package.json
{
  "scripts": {
    "build:dev": "REACT_APP_ENV=development npm run build",
    "build:prod": "REACT_APP_ENV=production npm run build"
  }
}

# Example 5: Continuous Deployment Workflow

## Typical CD pipeline:
1. Developer pushes code to feature branch
2. Create Pull Request → Preview deployment created
3. Merge to main → Production deployment
4. Automated tests run
5. If tests pass, deploy to production

## Render automatically handles this:
- Push to any branch → Preview deployment
- Merge to main → Production deployment

# Example 6: Troubleshooting Common Issues

## Build fails on Render
# Check build logs for errors
# Common issues:
# - Missing build script in package.json
# - Incorrect publish directory
# - Environment variables not set

## SPA routing not working
# Add redirects for client-side routing
# Create _redirects file or configure in dashboard

## Environment variables not loading
# Make sure variables are prefixed correctly:
# React: REACT_APP_
# Vite: VITE_
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Deployment Practice Exercises",
            content: `
                <p>Practice deploying different types of frontend projects:</p>
                <ol>
                    <li>Deploy a simple HTML/CSS/JavaScript portfolio website to Render</li>
                    <li>Create and deploy a React application using Create React App</li>
                    <li>Set up a custom domain for your deployed project (if you have one)</li>
                    <li>Configure environment variables for different deployment environments</li>
                    <li>Set up automatic deployments from a GitHub repository</li>
                    <li>Deploy the same project to multiple platforms (Render, Netlify, Vercel) and compare</li>
                    <li>Create a CI/CD pipeline that runs tests before deployment</li>
                    <li>Implement client-side routing in a SPA and configure proper redirects</li>
                    <li>Optimize your build process for faster deployment times</li>
                    <li>Set up preview deployments for pull requests</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "Why choose Render over other deployment platforms?",
            answer: "Render offers a generous free tier with no credit card required, automatic SSL certificates, custom domain support, and seamless GitHub integration. It's particularly good for students and small projects because it provides free static site hosting indefinitely. Compared to other platforms, Render has simpler pricing, better free tier limits, and doesn't require complex configuration for most use cases. It's also more transparent about what's included in the free tier."
        },
        {
            question: "What's the difference between static sites and dynamic sites in deployment?",
            answer: "Static sites are pre-built HTML, CSS, and JavaScript files that are served directly to users. Dynamic sites generate content on the server for each request. For frontend projects, we typically deploy static sites (even React/Vue apps become static after building). Static sites are faster, cheaper to host, more secure, and easier to scale. Modern frontend frameworks use client-side rendering, making them effectively static sites from a deployment perspective."
        },
        {
            question: "How do I handle client-side routing in SPAs on deployment platforms?",
            answer: "For Single Page Applications with client-side routing (like React Router), you need to configure redirects so that all routes serve your index.html file. On Render, create a _redirects file in your publish directory with '/* /index.html 200'. On Netlify, use netlify.toml with redirect rules. On Vercel, use vercel.json. This ensures that when users refresh or directly visit routes like /about, they get the main app instead of a 404 error."
        },
        {
            question: "What are the best practices for environment variables in frontend deployments?",
            answer: "Use build-time environment variables (prefix with REACT_APP_ for Create React App or VITE_ for Vite). Never commit sensitive keys to version control. Use different .env files for development and production. Set production variables in your deployment platform's dashboard. For sensitive data that shouldn't be exposed to clients, use serverless functions or backend APIs. Always validate that required environment variables are set during the build process."
        }
    ]
        }
    ]
};

// DOM Elements
const topicsList = document.getElementById('topics-list');
const navButtons = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');

// Content display elements
const contentTitles = {
    content: document.getElementById('current-topic-title'),
    examples: document.getElementById('current-example-title'),
    practice: document.getElementById('current-practice-title'),
    questions: document.getElementById('current-question-title')
};

const contentContainers = {
    content: document.getElementById('topic-content'),
    examples: document.getElementById('topic-examples'),
    practice: document.getElementById('topic-practice'),
    questions: document.getElementById('topic-questions')
};

// State
let currentTopicId = null;
let currentSection = 'content';

// Initialize the application
function init() {
    renderTopicsList();
    setupEventListeners();
    
    // Set the first topic as active by default
    if (courseData.topics.length > 0) {
        setActiveTopic(courseData.topics[0].id);
    }
}

// Render the list of topics in the sidebar
function renderTopicsList() {
    topicsList.innerHTML = '';
    
    courseData.topics.forEach(topic => {
        const listItem = document.createElement('li');
        listItem.className = 'topic-item';
        listItem.textContent = topic.title;
        listItem.dataset.topicId = topic.id;
        
        listItem.addEventListener('click', () => {
            setActiveTopic(topic.id);
        });
        
        topicsList.appendChild(listItem);
    });
}

// Set up event listeners for navigation
function setupEventListeners() {
    // Navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.dataset.section;
            setActiveSection(section);
        });
    });
}

// Set the active topic and update content
function setActiveTopic(topicId) {
    currentTopicId = topicId;
    
    // Update active topic in sidebar
    document.querySelectorAll('.topic-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.topicId === topicId) {
            item.classList.add('active');
        }
    });
    
    // Update content based on current section
    updateContent();
}

// Set the active section and update content
function setActiveSection(section) {
    currentSection = section;
    
    // Update active navigation button
    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.section === section) {
            button.classList.add('active');
        }
    });
    
    // Show/hide content sections
    contentSections.forEach(sectionEl => {
        sectionEl.classList.remove('active');
    });
    document.getElementById(`${section}-section`).classList.add('active');
    
    // Update content if a topic is selected
    if (currentTopicId) {
        updateContent();
    }
}

// Update the displayed content based on current topic and section
function updateContent() {
    const topic = courseData.topics.find(t => t.id === currentTopicId);
    if (!topic) return;
    
    // Update section titles
    contentTitles.content.textContent = topic.title;
    contentTitles.examples.textContent = `${topic.title} - Examples`;
    contentTitles.practice.textContent = `${topic.title} - Practice`;
    contentTitles.questions.textContent = `${topic.title} - Questions`;
    
    // Update content based on current section
    switch (currentSection) {
        case 'content':
            renderContent(topic);
            break;
        case 'examples':
            renderExamples(topic);
            break;
        case 'practice':
            renderPractice(topic);
            break;
        case 'questions':
            renderQuestions(topic);
            break;
    }
}

// Render the main content for a topic
function renderContent(topic) {
    contentContainers.content.innerHTML = `
        <div class="content-box">
            ${topic.content}
        </div>
    `;
}

// Render examples for a topic
function renderExamples(topic) {
    if (!topic.examples || topic.examples.length === 0) {
        contentContainers.examples.innerHTML = `
            <div class="example-box">
                <p>No examples available for this topic yet.</p>
            </div>
        `;
        return;
    }
    
    let examplesHTML = '';
    topic.examples.forEach(example => {
        examplesHTML += `
            <div class="example-box">
                <h3>${example.title}</h3>
                ${example.content}
            </div>
        `;
    });
    
    contentContainers.examples.innerHTML = examplesHTML;
}

// Render practice exercises for a topic
function renderPractice(topic) {
    if (!topic.practices || topic.practices.length === 0) {
        contentContainers.practice.innerHTML = `
            <div class="practice-box">
                <p>No practice exercises available for this topic yet.</p>
            </div>
        `;
        return;
    }
    
    let practiceHTML = '';
    topic.practices.forEach(practice => {
        practiceHTML += `
            <div class="practice-box">
                <h3>${practice.title}</h3>
                ${practice.content}
            </div>
        `;
    });
    
    contentContainers.practice.innerHTML = practiceHTML;
}

// Render questions for a topic
function renderQuestions(topic) {
    if (!topic.questions || topic.questions.length === 0) {
        contentContainers.questions.innerHTML = `
            <div class="question-box">
                <p>No questions available for this topic yet.</p>
            </div>
        `;
        return;
    }
    
    let questionsHTML = '';
    topic.questions.forEach((q, index) => {
        questionsHTML += `
            <div class="question-box">
                <h3>Question ${index + 1}</h3>
                <p><strong>Q:</strong> ${q.question}</p>
                <p><strong>A:</strong> ${q.answer}</p>
            </div>
        `;
    });
    
    contentContainers.questions.innerHTML = questionsHTML;
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);