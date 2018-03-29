<?php

namespace Drupal\vue_elements_examples;

class ExampleController {

  public function index() {
    return [
      '#markup' => '<div id="app"></div>',
      '#cache' => [
        'max-age' => 0,
      ],
      '#attached' => [
        'library' => ['vue_elements_examples/index'],
      ]
    ];
  }

  public function table() {
    $header = ['Name', 'Species', 'Color'];
    $rows = [
      ['Bomboy', 'Cat', 'White'],
      ['Diasy', 'Dog', 'Spotted'],
      ['Jetson', 'Llama', 'Snow'],
      ['Aproko', 'Goat', 'Milk'],
    ];
    return [
      // Implements server-side rendering of Drupal table with Vuejs
      'vue_table' => [
        '#prefix' => '<div id="app">',
        '#suffix' => '</div>',
        '#type' => 'table',
        '#vue_render' => TRUE,
        '#header' => $header,
        '#rows' => $rows,
        '#empty' => t('Nothing to see here'),
        '#cache' => [
          'max-age' => 0,
        ],
        '#attached' => [
          'library' => ['vue_elements_examples/TableApp'],
        ],
      ],
      // Normal server-side rendering of Drupal table without front-end JS.
      'normal_table' => [
        '#type' => 'table',
        '#header' => $header,
        '#rows' => $rows,
        '#empty' => t('Nothing to see here'),
        '#cache' => [
          'max-age' => 0,
        ],
      ],

    ];
  }

  public function old_table() {
    return [
      '#markup' => '<div id="app"></div>',
      '#cache' => [
        'max-age' => 0,
      ],
      '#attached' => [
        'library' => ['vue_elements_examples/table'],
        'drupalSettings' => [
          'examples' => [
            'header' => [t('Foo'), t('Bar'), t('Baz')],
            'rows' => []
          ]
        ]
      ]
    ];
  }

}
