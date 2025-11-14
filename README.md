# MobileRep

A reputation-based job marketplace and community savings platform connecting skilled workers with opportunities while building verifiable work history.

## What This Does

MobileRep solves three problems for informal workers and service providers:

1. **Job Marketplace**: Find work opportunities and connect with clients
2. **Skill Verification**: Build a reputation through peer vouching and completed work
3. **Ajo Contributions**: Participate in rotating savings groups with trusted community members

The platform is designed for mobile-first users in Nigeria, particularly those in the gig economy, skilled trades, and service sectors who lack formal employment records or credit history.

## Core Features

### Job Marketplace

**For Workers:**
- Create a profile showcasing skills and experience
- Browse available job postings
- Apply for opportunities that match your skills
- Track application status and earnings
- Build a portfolio of completed work

**For Employers:**
- Post job opportunities
- Search for workers by skill, location, or rating
- Review worker profiles and vouches
- Manage hiring and payment processes
- Rate workers after job completion

### Reputation System

The vouching system lets workers build credibility:

- **Skill Vouches**: Other users verify your claimed skills
- **Work Vouches**: Employers vouch for completed jobs
- **Community Vouches**: Character references from known contacts
- **Reputation Score**: Aggregated rating visible on your profile

Unlike review systems that only collect ratings, vouches require the voucher to stake their own reputation. This creates accountability and reduces fake endorsements.

### Ajo Contributions

Digital implementation of traditional rotating savings groups:

**How it works:**
1. Create or join an Ajo group (typically 5-20 members)
2. Set contribution amount and rotation schedule
3. Each cycle, one member receives the full pot
4. System tracks contributions and payouts automatically
5. Members vouch for each other before joining

**Key features:**
- Automated collection and distribution
- Transparent transaction history
- Default tracking (members who don't pay)
- Integration with reputation system
- SMS reminders for upcoming contributions

This brings the traditional Nigerian "Ajo" or "Esusu" system online, making it accessible to mobile money users without requiring everyone to meet in person.


## How to Use

### For Workers

**Initial Setup:**
1. Sign up with phone number or email
2. Complete your profile (skills, experience, location)
3. Request vouches from people who know your work
4. Wait for approval (minimum 3 vouches to activate full features)

**Finding Work:**
1. Browse job listings or search by skill
2. Apply with a message explaining your fit
3. Employers review your profile and vouches
4. If selected, agree on terms and start work
5. Mark job complete when done
6. Receive payment and employer vouch

**Building Reputation:**
- Complete jobs successfully
- Request vouches from satisfied clients
- Vouch for other skilled workers you know
- Keep your profile updated
- Respond quickly to messages

### For Employers

**Posting Jobs:**
1. Create an account and verify your identity
2. Post job with description, budget, and timeline
3. Review applications as they come in
4. Check applicant profiles and vouches
5. Select and message your preferred candidate
6. Agree on terms and track progress
7. Mark complete and release payment
8. Vouch for worker's skills

### For Ajo Groups

**Creating a Group:**
1. Navigate to Ajo section
2. Set group name, contribution amount, and schedule
3. Define rotation order (random or manual)
4. Invite members via phone or MobileRep username
5. Members join and stake initial contribution
6. Group activates when minimum members join

**Participating:**
1. Join an existing group or accept invitation
2. Link your mobile money account
3. Set up automatic contributions (recommended)
4. Receive SMS reminders before payment due
5. Collect your pot when it's your turn
6. Continue until rotation completes

**Group Management:**
- View contribution history for all members
- Track who has received payouts
- Report missed contributions
- Remove members who default (majority vote)
- Rate group experience after completion

## Technical Architecture

### Frontend
- React for the UI
- React Router for navigation
- Context API for state management
- Progressive Web App (PWA) for mobile installation
- Responsive design (mobile-first)

### Backend
- Firebase Authentication for user management
- Firestore for data storage
- Cloud Functions for payment processing
- Cloud Storage for profile images and documents
- Firebase Cloud Messaging for notifications

### Payment Integration
- Paystack for mobile money transactions
- Escrow system for job payments
- Automated Ajo collections
- Transaction history and receipts

### Communication
- In-app messaging system
- SMS notifications via Twilio
- Email for important updates
- Push notifications for mobile app


## Security Considerations

**User Verification:**
- Phone number verification required
- Optional government ID upload
- Minimum vouch requirement before full access
- Reputation decay for inactive users

**Payment Security:**
- Escrow system holds funds until job completion
- Dispute resolution process
- Transaction limits for new users
- Fraud detection monitoring

**Ajo Protection:**
- Members must be vouched before joining groups
- Contribution history tracked
- Default penalties affect reputation
- Insurance fund for group protection (future feature)

**Data Privacy:**
- User control over profile visibility
- Phone numbers not publicly displayed
- Chat messages encrypted
- GDPR-compliant data handling

## Known Limitations

**Current Issues:**
- Ajo dispute resolution is manual
- No offline mode for job browsing
- Limited payment methods (adding more)
- Single language support (English only)

**Planned Improvements:**
- Add Yoruba and Igbo language support
- Offline-first architecture
- More payment gateway options
- Skills assessment tests
- Video profile introductions
- In-app dispute mediation

## Mobile App

While the web app works on mobile browsers, a native app is in development for:
- Better performance on low-end devices
- Offline functionality
- Push notifications
- Camera integration for profile photos
- Geolocation for nearby jobs

Currently available as a PWA that can be installed to home screen.

## Contributing

Contributions are welcome, especially from those familiar with:
- Nigerian payment systems
- Mobile money integration
- Ajo/Esusu traditional practices
- PWA optimization
- Yoruba/Igbo localization

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes with clear commit messages
4. Test on mobile devices if possible
5. Submit a pull request with description

### Priority Areas

- Payment gateway integrations
- Language translations
- Mobile optimization
- Security improvements
- Documentation

## Deployment

The platform is deployed at:
https://6000-firebase-studio-1759411252322.cluster-fbfjltn375c6wqxlhoehbz44sk.cloudworkstations.dev/


## Support

**Common Issues:**

*"Can't verify phone number"*
- Check you're using Nigerian format (+234...)
- Try resending code
- Contact support if issue persists

*"Vouches not showing up"*
- Vouches require 24-hour review period
- Voucher must have active account
- Check spam/notifications folder

*"Ajo payment failed"*
- Ensure sufficient balance
- Check mobile money account is active
- Verify contribution amount is correct


## License

MIT License - see LICENSE file


## Disclaimer

MobileRep facilitates connections but doesn't employ workers or guarantee outcomes. Users are responsible for:
- Verifying credentials before hiring
- Managing payment terms and contracts
- Resolving disputes professionally
- Contributing to Ajo groups reliably

Ajo groups are informal arrangements. While the platform tracks contributions, it's not a licensed financial institution. Participate only with trusted community members.
