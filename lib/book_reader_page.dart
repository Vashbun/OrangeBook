import 'dart:io';

import 'package:epub_view/epub_view.dart';
import 'package:flutter/material.dart';

class BookReaderPage extends StatefulWidget {
  final File file;
  const BookReaderPage({super.key, required this.file});

  @override
  State<BookReaderPage> createState() => _BookReaderPageState();
}

class _BookReaderPageState extends State<BookReaderPage> {
  late EpubController _epubController;

  @override
  void initState() {
    super.initState();
    _epubController = EpubController(
      document: EpubReader.readBook(widget.file.readAsBytesSync()),
    );
  }

  @override
  void dispose() {
    _epubController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final name = widget.file.path.split('/').last;
    return Scaffold(
      appBar: AppBar(
        title: Text(name),
      ),
      body: EpubView(
        controller: _epubController,
      ),
    );
  }
}

