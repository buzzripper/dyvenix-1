
:: Run NPM server for Angular

CD /d "%~dp0..\src\app1.client"

ng serve --ssl --ssl-key C:\ProgramData\certs\localhost-key.pem --ssl-cert C:\ProgramData\certs\localhost.pem