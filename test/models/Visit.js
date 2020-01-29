const { factory } = require('../setup')
const ValidationError = require('mongoose/lib/error/validation')

describe('Visit', () => {
    it('creates a valid visit', () => {
        return factory.create('visit')
    })
    it('should not save without an origin', async () => {
        const visit = await factory.build('visit',{origin: null})
        await visit.save().should.eventually.be.rejectedWith(ValidationError)
    })
    it('should compute startOn using local startOnDate and startOnTime', async () => {
        const visit = await factory.create('visit', {startOnDate: '2020-02-29', startOnTime: '15:30'})
        visit.startOn.toISOString().should.eql('2020-02-29T20:30:00.000Z')
    })
    it('should not save without a startOnDate', async () => {
        const visit = await factory.build('visit',{startOnDate: null})
        await visit.save().should.eventually.be.rejectedWith(ValidationError)
    })
    it('should not save with an invalid startOnDate', async () => {
        const visit = await factory.build('visit',{startOnDate: '1999-a1-01'})
        await visit.save().should.eventually.be.rejectedWith(ValidationError)
    })
    it('should not save without a startOnTime', async () => {
        const visit = await factory.build('visit',{startOnTime: null})
        await visit.save().should.eventually.be.rejectedWith(ValidationError)
    })
    it('should not save with an invalid startOnTime', async () => {
        const visit = await factory.build('visit',{startOnTime: '08:a1'})
        await visit.save().should.eventually.be.rejectedWith(ValidationError)
    })
    it('should not save without groupSize', async () => {
        const visit = await factory.build('visit',{groupSize: null})
        await visit.save().should.eventually.be.rejectedWith(ValidationError)
    })
    it('should not save with groupSize less than 1', async () => {
        const visit = await factory.build('visit',{groupSize: 0})
        await visit.save().should.eventually.be.rejectedWith(ValidationError)
    })
    it('should not save without durationNights', async () => {
        const visit = await factory.build('visit',{durationNights: null})
        await visit.save().should.eventually.be.rejectedWith(ValidationError)
    })
    it('should not save with durationNights less than 0', async () => {
        const visit = await factory.build('visit',{durationNights: -1})
        await visit.save().should.eventually.be.rejectedWith(ValidationError)
    })
    it('should accept a valid checkedIn date', async() => {
        const visit = await factory.create('checkedInVisit')
        visit.should.have.a.property('checkedIn')
    })
    it('should not accept a checkedIn more than one day before the start date', async() => {
        const visit = await factory.create('visit')
        const earlyCheckIn = new Date(visit.startOn)
        earlyCheckIn.setHours(earlyCheckIn.getHours()-25)
        visit.set({checkedIn: earlyCheckIn})
        await visit.save().should.eventually.be.rejectedWith(ValidationError)
    })
    it('should not accept a checkIn more than a day after the scheduled end', async() => {
        const visit = await factory.create('visit')
        const lateCheckIn = new Date(visit.startOn)
        lateCheckIn.setHours(lateCheckIn.getHours()+25)
        visit.set({checkedIn: lateCheckIn})
        await visit.save().should.eventually.be.rejectedWith(ValidationError)
    })
    it('should accept a valid checkedOut date', async() => {
        const visit = await factory.create('checkedOutVisit')
        visit.should.have.a.property('checkedOut')
    })
    it('should not accept a checkedOut before checkedIn', async() => {
        const visit = await factory.create('checkedInVisit')
        const earlyCheckOut = new Date(visit.checkedIn)
        earlyCheckOut.setHours(earlyCheckOut.getHours()-1)
        visit.checkedOut = earlyCheckOut
        await visit.save().should.eventually.be.rejectedWith(ValidationError)
    })
    it('should not accept a checkedOut without a checkedIn', async () => {
        const visit = await factory.create('visit')
        visit.checkedOut = new Date()
        await visit.save().should.eventually.be.rejectedWith(ValidationError)
    })
})