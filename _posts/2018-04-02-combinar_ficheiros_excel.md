---
layout: post
title: Código para juntar vários ficheiros excel num só
description: Exemplo de script VBA que permite combinar vários ficheiros excel num único
date: 2018-04-02
categories: [Excel]
tags: [Excel]
img: header_excel.png
published: true
---
Imaginemos que temos um grande número de ficheiros excel e que, por um motivo ou outro, queremos combinar num só. Este script permite "transformar" cada ficheiro individual numa folha do ficheiro "master". Ou algo assim... em vez de termos vários ficheiros, ficamos com um único ficheiro com várias folhas.

{% highlight vb %}

Sub mergeFiles()
    'Merges all files in a folder to a main file.
    
    'Define variables:
    Dim numberOfFilesChosen, i As Integer
    Dim tempFileDialog As fileDialog
    Dim mainWorkbook, sourceWorkbook As Workbook
    Dim tempWorkSheet As Worksheet
    
    Set mainWorkbook = Application.ActiveWorkbook
    Set tempFileDialog = Application.fileDialog(msoFileDialogFilePicker)
    
    'Allow the user to select multiple workbooks
    tempFileDialog.AllowMultiSelect = True
    
    numberOfFilesChosen = tempFileDialog.Show
    
    'Loop through all selected workbooks
    For i = 1 To tempFileDialog.SelectedItems.Count
        
        'Open each workbook
        Workbooks.Open tempFileDialog.SelectedItems(i)
        
        Set sourceWorkbook = ActiveWorkbook
        
        'Copy each worksheet to the end of the main workbook
        For Each tempWorkSheet In sourceWorkbook.Worksheets
            tempWorkSheet.Copy after:=mainWorkbook.Sheets(mainWorkbook.Worksheets.Count)
        Next tempWorkSheet
        
        'Close the source workbook
        sourceWorkbook.Close
    Next i
    
End Sub

{% endhighlight %}

Utilização:

Abrir um ficheiro e abrir o editor de VBA (Alt+F11); Inserir novo módulo com o código acima e executar.
