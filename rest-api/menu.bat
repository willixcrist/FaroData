@echo off
set curltool=curl localhost:8000
cls
:menu
echo 1: Gestionar diagn¢sticos
echo 2: Gestionar programas
echo 3: Gestionar usuarios
echo 4: Gestionar trabajadores
choice /c 1234s /n
if %errorlevel% == 1 goto diagnostico
if %errorlevel% == 2 goto programas
if %errorlevel% == 3 goto usuarios
if %errorlevel% ==  4 goto trabajadores
if %errorlevel% == 5 goto salir
:diagnostico
cls
echo 1: Crear diagn¢stico
echo 2: listar diagn¢sticos
echo 3: buscar diagn¢stico por id
echo 4: Actualizar diagn¢stico
echo 5:  eliminar diagnostico
echo m: volver al men£ principal.
choice /c 12345m /n
if %errorlevel%==1 goto crearDiagnostico
if %errorlevel% == 2 goto listarDiagnosticos
if %errorlevel% == 3 goto buscarDiagnostico
if %errorlevel% == 4 goto actualizarDiagnostico
if %errorlevel% == 5 goto eliminarDiagnostico
if %errorlevel% ==6 goto menu
:programas
echo esto ir¡a a programas
goto menu
:usuarios
echo esto ir¡a a usuarios
goto menu
:trabajadores
cls
echo 1: Crear trabajadore.
echo 2: listar trabajadores
echo 3: Buscar trabajador por rut
echo 4: Actualizar trabajador
echo 5: eliminar trabajador.
echo m: volver al menu
choice /c 12345m /n
if %errorlevel% == 1 goto crearTrabajador   
if %errorlevel% == 2 goto  listarTrabajadores
if %errorlevel% == 3 goto buscarTrabajador
if %errorlevel% == 4 goto actualizarTrabajador
if %errorlevel% == 5 goto eliminarTrabajador
if %errorlevel% == 6 goto menu
:salir
echo adi¢s
exit /b
rem opciones de diagn¢stico
:crearDiagnostico
cls
echo Llene la siguiente informaci¢n:
set /p d=Descripci¢n del diagn¢stico
echo agregando diagn¢stico con descripci¢n %d%
echo {"descripcion": "%d%"}>data.json
echo agregando...
%curltool%/api/diagnostico/create --json @data.json
pause
goto menu
:listarDiagnosticos
echo consultando...
%curltool%/api/diagnostico/list
pause
goto menu
:buscarDiagnostico
echo Rellene la siguiente informaci¢n:
set /p id=Id del diagn¢stico a buscar
echo Buscando diagn¢stico con id %id%...
%curltool%/api/diagnostico/find/%id%
pause
goto menu
:actualizarDiagnostico
cls
echo rellene la siguiente informaci¢n:
set /p id=Id del diagn¢stico a modificar
echo OK, id %id% recibida.
set /p d=Nueva descripci¢n del diagn•stico
echo Ok, descripci¢n=%d%
echo creando datos json...
echo {"descripcion": "%d%"}>data.json
echo Realizando...
%curltool%/api/diagnostico/update/%id% -X PUT --json @data.json
pause
goto menu
:eliminarDiagnostico
cls
echo rellene la siguiente informaci¢n:
set /p id=Id del diagn¢stico a eliminar?
echo realizando...
%curltool%/api/diagnostico/delete/%id% -X DELETE
pause
goto menu
rem opciones de trabajadores
:crearTrabajador
cls
echo Llene la siguiente informaci¢n
set /p rut=Rut del trabajador:
echo rut recivido: %rut%.
set /p nombre=Nombre del trabajador:
set /p apellidos=Apellidos del trabajador
set /p cargo=Cargo (m ximo 150 caracteres):
echo cargo recibido: %cargo%
echo 1: perfil de administrador
echo 2: perfil de trabajador
choice /c 12 /n
set perfil=%errorlevel%
echo creando el trabajador
echo {"rut": "%rut%", "nombre": "%nombre%", "apellido": "%apellidos%", "cargo": "%cargo%", "perfil": "%perfil%"}>data.json
%curltool%/api/trabajador/create --json @data.json
pause
goto menu
:listarTrabajadores
echo listando trabajadores
%curltool%/api/trabajador/list
pause
goto menu
:buscarTrabajador
echo rellene la siguiente informaci¢n
set /p rut=Rut del trabajador a buscar:
echo buscando...
%curltool%/api/trabajador/find/%rut%
pause
goto menu
:actualizarTrabajador
echo en construcci¢n    
pause
goto menu
:eliminarTrabajador
echo en construcci¢n
pause
goto menu
