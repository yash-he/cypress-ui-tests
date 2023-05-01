# cypress
cypress ui automation tests

# To run tests using mocha test runner
npx cypress run --reporter mochawesome

Added tests:

    NavigateToFeedbackPage
    ValidateAuthorFiledIsFreezedForAnonymousUser
    ValidateCommentFieldIsEnabledForAnonymousUser
    ValidateCommentFieldCharLimitGetsDecrement
    ValidateRatingSliderBarForRating-3
    ValidateRatingSliderBarForRating-5
    ValidateSubmitButtomIsDisabledWhenCaptchaEnteredIsInvalid
    ValidateErrorMessageWhenEnteredCaptchaIsWrongInteger
    ValidateSuccessfullSubmissionOfFeebackWhenEnteredCaptchaIsValidInteger
