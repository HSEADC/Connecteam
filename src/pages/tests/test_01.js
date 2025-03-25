import '../../index.css'

const testData = {
    title: 'Я что, плохо руковожу?',
    questions: [
      {
        id: 1,
        text: 'Ключевой сотрудник неожиданно увольняется перед важным дедлайном. Твои действия:',
        answers: [
          {
            text: 'Придерживаешься первоначального плана и требуешь от команды соблюдения сроков',
            isCorrect: false
          },
          {
            text: 'Корректируете нагрузку, пересматриваешь дедлайн, пока ищешь замену',
            isCorrect: true
          },
          {
            text: 'Используешь ситуацию, пересматриваешь роли и внедрить новые подходы',
            isCorrect: false
          },
          {
            text: 'Делегируешь больше задач другим сотрудникам и ищешь временное решение',
            isCorrect: false
          }
        ]
      },
      {
        id: 2,
        text: 'Компания внедряет новый инструмент для работы, который нарушает привычные процессы. Ты:',
        answers: [
          {
            text: 'Сопротивляешься изменениям, продолжаешь работать по-старому',
            isCorrect: false
          },
          {
            text: 'Осваиваешь базовые функции, постепенно переводишь команду на новый инструмент',
            isCorrect: true
          },
          {
            text: 'Полностью принимаешь нововведение, тестируешь его и обучаешь команду',
            isCorrect: false
          },
          {
            text: 'Назначаешь ответственного за изучение инструмента перед глобальным внедрением',
            isCorrect: false
          }
        ]
      },
      {
        id: 3,
        text: 'Клиент запрашивает срочное изменение, которое требует значительных усилий. Ты:',
        answers: [
          {
            text: 'Отказываешь, так как это нарушает план проекта',
            isCorrect: true
          },
          {
            text: 'Принимаешь вызов, находишь креативный способ внести изменения эффективно',
            isCorrect: false
          },
          {
            text: 'Анализируешь последствия, а затем решаешь, возможно ли внесение изменений',
            isCorrect: true
          },
          {
            text: 'Обсуждаешь с клиентом альтернативные варианты, требующие меньших затрат',
            isCorrect: false
          }
        ]
      },
      {
        id: 4,
        text: 'Твоя команда предлагает нестандартный подход к решению проблемы. Ты:',
        answers: [
          {
            text: 'Остаёшься при проверенном методе, который уже работал в прошлом',
            isCorrect: true
          },
          {
            text: 'Поощряешь эксперименты и предлагаешь протестировать новый подход',
            isCorrect: true
          },
          { text: 'Рассматриваешь идею, но относишься к ней осторожно', isCorrect: false },
          {
            text: 'Просишь детальный план и потенциальные риски перед тем, как принять решение',
            isCorrect: false
          }
        ]
      },
      {
        id: 5,
        text: 'Ты получаешь негативный отзыв от команды о вашем стиле управления. Ты:',
        answers: [
          {
            text: 'Защищаете свою точку зрения и объясняешь, почему поступаешь так, а не иначе',
            isCorrect: false
          },
          {
            text: 'Воспринимаешь это как возможность для роста и активно ищешь пути улучшения',
            isCorrect: true
          },
          {
            text: 'Внимательно слушаешь и вносишь небольшие корректировки',
            isCorrect: false
          },
          {
            text: 'Собираетесь командой, вместе находишь компромисс и улучшаешь взаимодействие',
            isCorrect: false
          }
        ]
      }
    ],
    results: [
      {
        minScore: 0,
        maxScore: 2,
        title: 'Есть куда расти',
        description: 'Ваши управленческие навыки нуждаются в развитии.'
      },
      {
        minScore: 3,
        maxScore: 4,
        title: 'Стабильность и структура — твоя формула успеха!',
        description: 'Однако тебе может быть сложно адаптироваться к изменениям, твоя зона роста — выход из зоны комфорта и привычных сценариев, смотри шире!'
      },
      {
        minScore: 5,
        maxScore: 7,
        title: 'Хороший руководитель',
        description: 'Вы демонстрируете хорошие управленческие навыки.'
      },
      {
        minScore: 8,
        maxScore: 10,
        title: 'Отличный лидер!',
        description:
          'Вы прекрасный руководитель с развитыми гибкими навыками.'
      }
    ]
  }

  let currentQuestionIndex = 0
  let userAnswers = []
  let selectedAnswerIndex = null

  function renderQuestion() {
    const question = testData.questions[currentQuestionIndex]
    selectedAnswerIndex = null

    document.getElementById('W_test_container').innerHTML = `
            <div class="W_test_content_heading">
                <div class="W_test_question">
                    <div class="M_test_question">
                        <p class="text_button_text">Вопрос <span>${
                          currentQuestionIndex + 1
                        }</span> из ${testData.questions.length}</p>
                    </div>
                    <h2 class="A_test_title">${question.text}</h2>
                </div>
                <button class="A_looking_for_button text_button_text" id="backButton">
                    Вернуться назад
                </button>
            </div>
            <div class="W_test_content_body">
                <div class="C_test_answer_variants">
                    ${question.answers
                      .map(
                        (answer, index) => `
                        <div class="M_test_answer_variant" data-index="${index}">
                            <p class="text_body_text">${answer.text}</p>
                        </div>
                    `
                      )
                      .join('')}
                </div>
                <button class="A_test_answer_next_button text_button_text" id="nextButton" disabled>
                    ${
                      currentQuestionIndex < testData.questions.length - 1
                        ? 'Следующий вопрос'
                        : 'Узнать результат'
                    }
                </button>
            </div>
        `

    document
      .querySelectorAll('.M_test_answer_variant')
      .forEach((variant) => {
        variant.addEventListener('click', function () {
          document
            .querySelectorAll('.M_test_answer_variant')
            .forEach((v) => {
              v.classList.remove('selected')
            })

          this.classList.add('selected')
          selectedAnswerIndex = parseInt(this.getAttribute('data-index'))
          document.getElementById('nextButton').disabled = false
        })
      })

    document
      .getElementById('nextButton')
      .addEventListener('click', goToNextQuestion)
    document
      .getElementById('backButton')
      .addEventListener('click', goToPreviousQuestion)
  }

  function goToNextQuestion() {
    if (selectedAnswerIndex !== null) {
      const question = testData.questions[currentQuestionIndex]
      userAnswers.push({
        questionId: question.id,
        answerIndex: selectedAnswerIndex,
        isCorrect: question.answers[selectedAnswerIndex].isCorrect
      })

      if (currentQuestionIndex < testData.questions.length - 1) {
        currentQuestionIndex++
        renderQuestion()
      } else {
        showResults()
      }
    }
  }

  function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
      if (userAnswers.length > currentQuestionIndex - 1) {
        userAnswers.pop()
      }
      currentQuestionIndex--
      renderQuestion()
    }
  }

  function showResults() {
    const correctAnswers = userAnswers.filter(
      (answer) => answer.isCorrect
    ).length
    const score = correctAnswers * 2
    const result = testData.results.find(
      (r) => score >= r.minScore && score <= r.maxScore
    )

    document.getElementById('W_test_container').innerHTML = `
            <div class="A_test_result_image A_test_result_image_01"></div>
            <div class="A_test_result_image A_test_result_image_02"></div>
            <div class="W_result_content">
                <div class="M_test_question">
                    <p class="text_button_text">Результат</p>
                </div>
                <div class="W_test_results_text">
                    <h1>${result.title}</h1>
                    <p class="text_body_text">${result.description}</p>
                </div>
                <div class="W_test_results_buttons">
                    <button class="A_test_answer_next_button text_button_text" id="restartButton">Поделиться результатом</button>
                    <a class="A_looking_for_button text_button_text" href="Connecteam/interactives"
                        >Вернуться к тестам</a
                    >
                </div>
            </div>
        `
  }

  document.addEventListener('DOMContentLoaded', renderQuestion)