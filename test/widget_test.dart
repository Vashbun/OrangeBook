import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:orangebook/main.dart';

void main() {
  testWidgets('Book list starts empty', (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());

    expect(find.byType(ListTile), findsNothing);
    expect(find.byIcon(Icons.add), findsOneWidget);
  });
}

